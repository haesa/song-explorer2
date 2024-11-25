export const getSongs = (keyword) => {
  const url = keyword
    ? `https://api.manana.kr/karaoke/song/${keyword}.json`
    : 'https://api.manana.kr/karaoke.json';

  return fetch(url).then((res) => res.json());
};
