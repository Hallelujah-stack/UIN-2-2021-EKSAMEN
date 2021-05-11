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

const StyledCardLink = styled.a`
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

const EventItem = ({ preAmble, img, title, text, link }) => (
  <EventContainer>
    <EventHeading>{title}</EventHeading>
    <StyledCardImage src={img?.asset?.url} alt={img?.alt} />
    <StyledCardText>{text}</StyledCardText>
    <EventPreAmble>{preAmble}</EventPreAmble>
    {link?.length > 0 &&
      link.map((l) => (
        <StyledCardLink key={l?._key} href={l?.href}>
          {l?.name}
        </StyledCardLink>
      ))}
  </EventContainer>
);

export default EventItem;
