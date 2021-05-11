import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container } from '../styles/Styles';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { getArticle } from '../utils/articleService';

const ArtikkelSide = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

export default ArtikkelSide;
