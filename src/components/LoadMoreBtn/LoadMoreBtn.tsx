import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <button
      type="button"
      className={css.loadMoreBtn}
      onClick={loadMore}
    >
      Load More
    </button>
  );
};
export default LoadMoreBtn;
