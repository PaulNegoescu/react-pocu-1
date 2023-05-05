import { Link } from 'react-router-dom';
import styles from './Films.module.css';

export function FilmCard({ film }) {
  return (
    <article className={styles.filmCard}>
      <Link to={film.id.toString()}>
        <img src={film.poster} alt={`Poster for ${film.title}`} />
        <h3>{film.title}</h3>
      </Link>
    </article>
  );
}
