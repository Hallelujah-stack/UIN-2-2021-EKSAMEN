import React, { useEffect, useState } from 'react';

import Cards from '../components/Cards';
import Card from '../components/Card';
import { getArticle } from '../utils/articleService';

const Global = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const Home = await getArticle('globale-nyheter');
        setData(Home);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, []);

  if (loading) return <p>Loading ...</p>;
  if (!data && error) return <p>{error?.message}</p>;

  return (
    <>
      <Cards>
        {data?.cards?.length > 0 &&
          // eslint-disable-next-line react/jsx-props-no-spreading
          data.cards.map((card) => <Card key={card._key} {...card} />)}
      </Cards>
    </>
  );
};

export default Global;
