import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../styles/Styles';
import { getArticle } from '../utils/articleService';
import Cards from '../components/Cards';
import Card from '../components/Card';
import Lead from '../components/Lead';
import Title from '../components/Title';


const ArtikkelSideN = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      try {
        const Artikkel = await getArticle(slug);
        setData(Artikkel);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, [slug]);

  if (loading) return <p>Loading ...</p>;
  if (!data && error) return <p>{error?.message}</p>;

  return (
    <>
      <Container>
        <Title title={data?.title} />
        <Lead lead={data?.lead} />
      </Container>
    </>
  );
};

export default ArtikkelSideN;
