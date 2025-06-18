import { UnsplashImage } from '@/unsplash-api';
import ImageCard from '@components/ImageCard/ImageCard';

import css from './ImageGallery.module.css';

interface PropsGallery {
  items: UnsplashImage[];
  onImageClick: (item: UnsplashImage) => void;
}

export const ImageGallery = ({ items, onImageClick }: PropsGallery) => {
  return (
    <div className={css.container}>
      <ul className={css.cardContainer}>
        {items.map((item) => (
          <li key={item.id} className={css.cardItem}>
            <ImageCard item={item} onClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};
