import { UnsplashImage } from '@/unsplash-api';

interface Props {
  item: UnsplashImage;
  onClick: (item: UnsplashImage) => void;
}

const ImageCard = ({ item, onClick }: Props) => {
  return (
    <img
      src={item.urls.small}
      alt={item.description}
      onClick={() => onClick(item)}
    />
  );
};
export default ImageCard;
