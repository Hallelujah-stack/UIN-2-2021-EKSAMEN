import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EventContainer = styled.article`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  padding: 10px;
  width: 100%;
`;

const EventHeading = styled.h2`
  font-size: 1.8rem;
  line-height: 1.2;
  font-weight: 900;
  margin-bottom: 1.6rem;
  color: black;
`;

const EventPreAmble = styled(EventHeading)`
  font-size: 1.3rem;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  font-size: 1.3rem;
  color: black;
`;

const StyledCardImage = styled.img`
  max-width: 100%;
`;

const StyledCardText = styled.p`
  font-size: 1.2rem;
  line-height: 2.4rem;
  color: black;
`;

const EventItem = ({ preAmble, slug, img, title, text }) => (
  <EventContainer>
    <EventHeading>{title}</EventHeading>
    <StyledCardImage src={img?.asset?.url} alt={img?.alt} />
    <StyledCardText>{text}</StyledCardText>
    <EventPreAmble>{preAmble}</EventPreAmble>
    <StyledLink to={`/article/${slug}`}>Gå til artikkel</StyledLink>
  </EventContainer>
);

export default EventItem;
