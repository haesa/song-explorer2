import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSongs } from '../../apis';

import SearchBar from '../../components/SearchBar';
import SongList from '../../components/SongList';

import styles from './SearchPage.module.css';

export default function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const { data, isLoading } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () => getSongs(keyword),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <SearchBar onSearch={(value) => setKeyword(value)} />
      <SongList songs={data} />
    </div>
  );
}
