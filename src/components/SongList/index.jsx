import Song from '../Song';

import styles from './SongList.module.css';

export default function SongList({ songs }) {
  return (
    <ul className={styles.songs}>
      {songs.map((song) => (
        <Song key={`${song.brand}${song.no}`} song={song} />
      ))}
    </ul>
  );
}
