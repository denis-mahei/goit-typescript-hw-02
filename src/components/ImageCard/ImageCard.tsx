import { UnsplashImage } from '@/unsplash-api';

const ImageCard = ({ item: UnsplashImage, onClick }) => {
  return (
    <img
      src={item.urls.small}
      alt={item.description}
      onClick={() => onClick(item)}
    />
  );
};
export default ImageCard;
