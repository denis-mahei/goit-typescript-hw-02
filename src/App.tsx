import './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { Loader } from './components/Loader/Loader';
import { fetchImageWithQuery } from './unsplash-api.js';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';

const App = () => {
  const [images, setImages] = useState([]); // for images request
  const [loading, setLoading] = useState(false); // show loader
  const [error, setError] = useState(null); // for error
  const [noResults, setNoResults] = useState(false); // if no results...
  const [page, setPage] = useState(1); // state for current page pagination
  const [searchQuery, setSearchQuery] = useState(''); // search field state
  const [selectedImage, setSelectedImage] = useState(null); // state for modal

  const handleSearch = async (query, page) => {
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
        setImages((prev) => [...prev, ...results]);
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

  const handleFormSubmit = (query) => {
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

  const handleModalOpen = (item) => {
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
