import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { Container } from '../styles/Styles';
import { getArticle } from '../utils/articleService';

const Vgtv = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const Global = await getArticle('vgtv');
        setData(Global);
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
      <Lead lead={data?.lead} />
      <Cards>
        {data?.cards?.length > 0 &&
          data.cards.map((card) => <Card key={card._key} {...card} />)}
      </Cards>
    </Container>
  );
};

export default Vgtv;