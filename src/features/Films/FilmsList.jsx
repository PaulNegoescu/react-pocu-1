import { useEffect, useState } from 'react';
import styles from './Films.module.css';
import { configureApi } from '~/helpers/api.helper';
import { FilmCard } from './FilmCard';

const { get } = configureApi('films');

export function FilmsList() {
  const [films, setFilms] = useState(null);

  useEffect(() => {
    get().then((data) => setFilms(data));
  }, []);

  return (
    <section className={styles.filmsList}>
      <h2 className={styles.fullWidth}>Films List</h2>

      {films?.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </section>
  );
}
