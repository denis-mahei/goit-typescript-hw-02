import React, { FormEvent } from 'react';
import { TbPhotoSearch } from 'react-icons/tb';

import css from './SearchBar.module.css';

interface Props {
  onSearch: (query: string) => void;
  onError: (message: string) => void;
}

const SearchBar = ({ onSearch, onError }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const queryInput = form.elements.namedItem('query') as HTMLInputElement;
    const query = queryInput.value;

    if (query.trim() === '') {
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
