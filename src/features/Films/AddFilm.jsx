import { Autocomplete, Button } from '~/components';
import { configureApi } from '~/helpers/api.helper';
import { useEffect, useState } from 'react';

import styles from './Films.module.css';

const { get: getCharacters } = configureApi('characters');
const { get: getPlanets } = configureApi('planets');

export function AddFilm() {
  const [characters, setCharacters] = useState(null);
  const [planets, setPlanets] = useState(null);
  useEffect(() => {
    getCharacters().then(setCharacters);
    getPlanets().then(setPlanets);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const values = new FormData(e.target);
    console.log('planets: ', values.getAll('planets').map(Number));
    console.log('characters: ', values.getAll('characters').map(Number));
  }

  return (
    <>
      <h2>Add a Film</h2>
      <form className={styles.addForm} onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />

        <label htmlFor="episode_id">Episode Id</label>
        <input type="number" min="0" id="episode_id" name="episode_id" />

        <label htmlFor="opening_crawl" className="align-self-top">
          Opening Crawl
        </label>
        <textarea rows="10" id="opening_crawl" name="opening_crawl"></textarea>

        <label htmlFor="director">Director</label>
        <input type="text" id="director" name="director" />

        <label htmlFor="poster">Poster</label>
        <input type="url" id="poster" name="poster" />

        <label htmlFor="producer">Producer</label>
        <input type="text" id="producer" name="producer" />

        <label htmlFor="release_date">Release Date</label>
        <input type="date" id="release_date" name="release_date" />

        <span className="align-self-top">Characters</span>
        <div className={styles.group}>
          {characters?.map((ch) => (
            <label key={ch.id}>
              <input type="checkbox" name="characters" value={ch.id} />
              {ch.name}
            </label>
          ))}
        </div>

        <label htmlFor="planets" className="align-self-top">
          Planets
        </label>
        <Autocomplete
          name="planets"
          options={planets?.map((p) => ({ value: p.id, label: p.name }))}
        />

        <Button variant="primary" className={styles.submitBtn}>
          Add film
        </Button>
      </form>
    </>
  );
}
