import { useRef } from 'react';
import { useKeywordStore } from '../../stores/keywordStore.js';

import styles from './SearchBar.module.css';

export default function SearchBar() {
  const inputRef = useRef();
  const { updateKeyword } = useKeywordStore();

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
        onClick={() => updateKeyword(inputRef.current.value)}
      >
        검색
      </button>
    </div>
  );
}
