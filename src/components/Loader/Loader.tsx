import { RingLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <RingLoader color="#646cff" />
    </div>
  );
};
