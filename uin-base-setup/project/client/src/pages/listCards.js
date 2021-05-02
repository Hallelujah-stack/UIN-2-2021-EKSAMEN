import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { Container } from '../styles/Styles';
import { getPage } from '../utils/pageService';

const Trainings = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const fetchDataAsync = async () => {
        setLoading(true);
        try {
          const page = await getPage('trening');
          setData(page);
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
  
  export default Trainings;