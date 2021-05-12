import styled from 'styled-components';

const StyledGrid = styled.section`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || 'repeat(3, 1fr)'};
  gap: ${({ gap }) => gap || '20px'};
`;

const Cards = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <StyledGrid {...props}>{children}</StyledGrid>
);

export default Cards;
