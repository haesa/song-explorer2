import { useKeywordStore } from '../../stores/keywordStore.js';
import { useQuery } from '@tanstack/react-query';
import { getSongs } from '../../apis';
import Song from '../Song';

import styles from './SongList.module.css';

export default function SongList() {
  const { keyword } = useKeywordStore();
  const { data: songs, isLoading } = useQuery({
    queryKey: ['search', keyword],
    queryFn: () => getSongs(keyword),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={styles.songs}>
      {songs.map((song) => (
        <Song key={`${song.brand}${song.no}`} song={song} />
      ))}
    </ul>
  );
}
