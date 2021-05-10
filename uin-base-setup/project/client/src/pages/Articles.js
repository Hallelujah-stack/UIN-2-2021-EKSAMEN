import React, { useState } from 'react';
import { getArticle } from '../utils/articleService';
import Article from './Article';

function Movies() {
  const [data, setData] = useState([]);

  const handleClick = async () => {
    const dutty = await getArticle();
    setData(dutty);
  };

  return (
    <section>
      <ul>
        {data?.length > 0 ? (
          data.map((article) => (
            <Article title={article.title} actor={article.actor} />
          ))
        ) : (
          <p>Ingen filmer</p>
        )}
      </ul>
      <button type="button" onClick={handleClick}>
        Knapp
      </button>
    </section>
  );
}

export default Movies;
