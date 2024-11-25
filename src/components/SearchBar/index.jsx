import { useRef } from 'react';

import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const inputRef = useRef();

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type='text'
        placeholder='검색어를 입력하세요'
      />
      <button
        className={styles.button}
        onClick={() => onSearch(inputRef.current.value)}
      >
        검색
      </button>
    </div>
  );
}
