import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { configureApi } from '~/helpers/api.helper';

const { get } = configureApi('films');

export function FilmDetails() {
  const [film, setFilm] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    get(filmId).then((data) => setFilm(data));
  }, [filmId]);

  return (
    <>
      <h1>{film?.title}</h1>
      <Link to={'/films/' + (film?.id + 1)}>Next film</Link>
    </>
  );
}
