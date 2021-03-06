import React, { useEffect, useState } from 'react';
import { Container, ScreenStyle } from '../styles/Styles';
import Screen from '../components/Screen';
import Cards from '../components/Cards';
import Card from '../components/Card';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { getArticle } from '../utils/articleService';

const Forside = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      console.log();
      try {
        const Home = await getArticle('home');
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
      <Container>
        <Title title={data?.title} />
        <ScreenStyle>
          <Screen />
        </ScreenStyle>
        <Lead lead={data?.lead} />
        <Cards>
          {data?.cards?.length > 0 &&
            // eslint-disable-next-line react/jsx-props-no-spreading
            data.cards.map((card) => <Card key={card._key} {...card} />)}
        </Cards>
      </Container>
    </>
  );
};

export default Forside;
