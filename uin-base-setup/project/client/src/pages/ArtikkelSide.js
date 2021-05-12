import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../styles/Styles';
import { getArticle } from '../utils/articleService';
import Lead from '../components/Lead';
import Title from '../components/Title';
import { urlFor } from '../utils/imageUrl';
import SanityContent from '../components/SanityContent';

const Body = styled.section`
  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin: 1rem 0;
  }
  h2 {
    font-size: 2.6rem;
    font-weight: 600;
    margin: 1rem 0;
  }
  h3 {
    font-size: 2rem;
    font-weight: 500;
    margin: 1rem 0;
  }
  p {
    margin: 2rem 0;
    line-height: 1.2;
  }
`;

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

  if (!data && error) return <div>Noe gikk galt ...</div>;
  if (!data && loading) return <div>Loading ... </div>;

  return (
    <>
      <Container>
        <Title title={data?.title} />
        <Lead lead={data?.lead} />
        {data?.image ? (
          <figure>
            <img
              src={urlFor(data.image).width(800).format('webp').url()}
              alt={data.image.alternativeText}
            />
          </figure>
        ) : null}
        <Body>
          <SanityContent data={data?.body} />
        </Body>
      </Container>
    </>
  );
};

export default ArtikkelSideN;
