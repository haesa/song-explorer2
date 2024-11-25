import { Link, useNavigate } from 'react-router';
import SearchBar from '../../components/SearchBar';
import SongList from '../../components/SongList';

import styles from './SearchPage.module.css';

export default function SearchPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Link to='/liked'>Liked Link</Link>
      <button onClick={() => navigate('/liked')}>Liked Button</button>
      <SearchBar />
      <SongList />
    </div>
  );
}
