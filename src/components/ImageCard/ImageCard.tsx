const ImageCard = ({ item, onClick }) => {
  console.log(item);
  return (
    <img
      src={item.urls.small}
      alt={item.description}
      onClick={() => onClick(item)}
    />
  );
};
export default ImageCard;
