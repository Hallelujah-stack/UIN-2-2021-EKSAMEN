import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { Container, ScreenStyle } from '../styles/Styles';
import { getArticle } from '../utils/articleService';
import Screen from '../components/Screen';

const NorgeN = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const Norge = await getArticle('nasjonale-nyheter');
        setData(Norge);
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
    <Container>
      <Title title={data?.title} />
      <ScreenStyle>
        <Screen />
      </ScreenStyle>
      <Lead lead={data?.lead} />
      <Cards>
        {data?.cards?.length > 0 &&
          data.cards.map((card) => <Card key={card._key} {...card} />)}
      </Cards>
    </Container>
  );
};

export default NorgeN;
