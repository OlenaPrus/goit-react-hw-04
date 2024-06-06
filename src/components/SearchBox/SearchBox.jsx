import { useId } from "react";
import css from './SearchBox.module.css';

export default function SearchBox({ value, onSearch }) {
  function handleChange(e) {
    onSearch(e.target.value);
  }

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="searchContact">
        Find contacts by name
      </label>
      <input
        className={css.searchContact}
        type="text"
        value={value}
        onChange={handleChange}
        id="searchContact"
      />
    </div>
  );
};
