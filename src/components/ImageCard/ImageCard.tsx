const ImageCard = ({ item, onClick }) => {
  return (
    <img
      src={item.urls.small}
      alt={item.user.description}
      onClick={() => onClick(item)}
    />
  );
};
export default ImageCard;
