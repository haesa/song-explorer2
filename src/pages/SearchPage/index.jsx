import SearchBar from '../../components/SearchBar';
import SongList from '../../components/SongList';

import styles from './SearchPage.module.css';

export default function SearchPage() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <SongList />
    </div>
  );
}
