import styles from './Song.module.css';

export default function Song({ song }) {
  const { no, title, singer } = song;

  return (
    <li className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.title}>{title}</span>
          <span className={styles.singer}>{singer}</span>
        </div>
        <div className={styles.right}>
          <span className={styles.no}>{no}</span>
        </div>
      </div>
    </li>
  );
}
