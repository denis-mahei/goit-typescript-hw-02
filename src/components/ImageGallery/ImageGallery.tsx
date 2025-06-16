import ImageCard from '../ImageCard/ImageCard.tsx';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ items, onImageClick }) => {
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
