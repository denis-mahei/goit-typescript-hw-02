import css from './ImageModal.module.css';
import ReactModal from 'react-modal';

const ImageModal = ({ item, onClose }) => {
  return (
    <ReactModal
      style={{
        content: {
          overflow: 'hidden',
          borderRadius: '5px',
        },
      }}
      isOpen={item}
      onRequestClose={onClose}
      contentLabel="image modal"
      overlayClassName={css.backdrop}
      shouldCloseOnOverlayClick={true}
    >
      <img
        src={item.urls.regular}
        alt={item.alt_description || 'image'}
        className={css.modalImage}
      />
      <div className={css.author}>
        <p>Author: {item.user?.name || 'Unknown'}</p>
      </div>
    </ReactModal>
  );
};
export default ImageModal;
