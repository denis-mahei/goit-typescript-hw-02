import { UnsplashImage } from '../../unsplash-api';
import ReactModal from 'react-modal';

import css from './ImageModal.module.css';

interface Props {
  item: UnsplashImage;
  onClose: () => void;
}

const ImageModal = ({ item, onClose }: Props) => {
  return (
    <ReactModal
      style={{
        content: {
          overflow: 'hidden',
          borderRadius: '5px',
        },
      }}
      isOpen={true}
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
