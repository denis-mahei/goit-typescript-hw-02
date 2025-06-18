import css from './LoadMoreBtn.module.css';

type Props = {
  loadMore: () => void;
};

const LoadMoreBtn = ({ loadMore }: Props) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={loadMore}>
      Load More
    </button>
  );
};
export default LoadMoreBtn;
