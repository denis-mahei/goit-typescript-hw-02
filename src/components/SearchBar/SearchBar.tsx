import React from 'react';
import { TbPhotoSearch } from 'react-icons/tb';
import css from './SearchBar.module.css';

interface Interface {}

const SearchBar = ({ onSearch, onError }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const query = form.elements.query.value;

    if (form.elements.query.value.trim() === '') {
      onError('Please enter a search term!');
      return;
    }

    onSearch(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <div className={css.inputWrapper}>
          <input
            className={css.searchField}
            name="query"
            type="text"
            autoFocus
            autoComplete="off"
            placeholder="Search images and photos..."
          />
          <button type="submit" className={css.searchBtn}>
            <TbPhotoSearch className={css.icon} />
          </button>
        </div>
      </form>
    </header>
  );
};
export default SearchBar;
