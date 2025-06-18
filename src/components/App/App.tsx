import { useEffect, useState } from 'react';
import { Loader } from '../Loader/Loader';
import { fetchImageWithQuery } from '@/unsplash-api';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';
import SearchBar from '../SearchBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { UnsplashImage } from '@/unsplash-api';

import './App.module.css';

const App = () => {
  const [images, setImages] = useState<UnsplashImage[]>([]); // for images request
  const [loading, setLoading] = useState<boolean>(false); // show loader
  const [error, setError] = useState<string | null>(null); // for error
  const [noResults, setNoResults] = useState<boolean>(false); // if no results...
  const [page, setPage] = useState<number>(1); // state for current page pagination
  const [searchQuery, setSearchQuery] = useState<string>(''); // search field state
  const [selectedImage, setSelectedImage] = useState<UnsplashImage | null>(
    null
  ); // state for modal

  const handleSearch = async (query: string, page: number) => {
    try {
      setLoading(true);
      const results = await fetchImageWithQuery(query, page);

      if (results.length === 0) {
        setNoResults(true);
        return;
      }

      setNoResults(false);

      if (page === 1) {
        setImages(results);
      } else {
        setImages((prev) => {
          const filtered = results.filter(
            (newImage) => !prev.some((oldImage) => oldImage.id === newImage.id)
          );
          return [...prev, ...filtered];
        });
      }
    } catch (e) {
      setError('Oops! Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleMoreBtn = () => {
    setPage((prev) => prev + 1);
  };

  const handleFormSubmit = (query: string) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
    setError(null);
    setNoResults(false);
  };

  useEffect(() => {
    if (searchQuery === '') return;

    handleSearch(searchQuery, page);
  }, [searchQuery, page]);

  const handleModalOpen = (item: UnsplashImage) => {
    setSelectedImage(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSearch={handleFormSubmit} onError={setError} />
      {error && <ErrorMessage message={error} />}
      {noResults && (
        <ErrorMessage message="No images found. Try another search!" />
      )}
      {loading && <Loader />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleModalOpen} />
      )}
      {images.length > 0 && <LoadMoreBtn loadMore={handleMoreBtn} />}
      {selectedImage && (
        <ImageModal item={selectedImage} onClose={handleCloseModal} />
      )}
    </>
  );
};
export default App;
