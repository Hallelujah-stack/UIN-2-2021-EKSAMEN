import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../styles/Styles';
import Cards from '../components/Cards';
import Card from '../components/Card';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { getArticle } from '../utils/articleService';

const OmOssN = () => {
  const { pathname } = useLocation();
  const slug = pathname.split('/');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const OmOss = await getArticle(slug[1] || '');
        setData(OmOss);
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

export default OmOssN;
