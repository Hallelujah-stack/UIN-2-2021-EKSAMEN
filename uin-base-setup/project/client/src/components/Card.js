import styled from 'styled-components/macro';

const StyledArticle = styled.article`
  display: block;
  position: relative;
  margin: 0;
  width: 100%;
  z-index: 2;
  padding: 2rem 3rem;
  overflow: hidden;
  border-radius: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`;

const StyledCardContent = styled.section`
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.nav.background};
  padding: 1rem;
  transition: all 300ms ease-in-out;
  &:hover {
    bottom: 0;
  }
`;

const StyledCardH2 = styled.h2`
  font-size: 1.8rem;
  line-height: 1.2;
  font-weight: 900;
  margin-bottom: 1.6rem;
  color: black;
`;

const StyledCardImage = styled.img`
  max-width: 100%;
  padding: 10px;
  margin: 0;
`;

const StyledCardLink = styled.a`
  font-size: 1.3rem;
  color: black;
`;

const StyledCardText = styled.p`
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: black;
`;

const Card = ({ img, title, text, link }) => (
  <StyledArticle>
    <StyledCardImage src={img?.asset?.url} alt={img?.alt} />
    <StyledCardContent>
      <StyledCardH2>{title}</StyledCardH2>
      <StyledCardText>{text}</StyledCardText>
      {link?.length > 0 &&
        link.map((l) => (
          <StyledCardLink key={l?._key} href={l?.href}>
            {l?.name}
          </StyledCardLink>
        ))}
    </StyledCardContent>
  </StyledArticle>
);
export default Card;
