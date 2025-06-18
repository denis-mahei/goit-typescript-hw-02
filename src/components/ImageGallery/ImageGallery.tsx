import ImageCard from '../ImageCard/ImageCard';
import { UnsplashImage } from '@/unsplash-api';

import css from './ImageGallery.module.css';

interface PropsGallery {
  items: UnsplashImage[];
  onImageClick: () => void;
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
