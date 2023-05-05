import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { configureApi } from '~/helpers/api.helper';

const { get: getFilms } = configureApi('films');
const { get: getCharacters } = configureApi('characters');

export function FilmDetails() {
  const [film, setFilm] = useState(null);
  const [characters, setCharacters] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    async function getData() {
      const data = await getFilms(filmId);
      setFilm(data);
      // let chPromises = [];
      // for (const characterId of data.characters) {
      //   chPromises.push(getCharacters(characterId));
      // }
      const chPromises = data.characters.map((id) => getCharacters(id));
      const ch = await Promise.all(chPromises);
      setCharacters(ch);
    }

    getData();
  }, [filmId]);

  return (
    <>
      <h1>{film?.title}</h1>
      <ul>
        {characters?.map((ch) => (
          <li key={ch.id}>{ch.name}</li>
        ))}
      </ul>
      <Link to={'/films/' + (film?.id + 1)}>Next film</Link>
    </>
  );
}
