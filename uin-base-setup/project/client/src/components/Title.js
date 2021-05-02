import styled from 'styled-components/macro';

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-weight: 700;
`;

const Title = ({ title }) => <StyledH1>{title}</StyledH1>;

export default Title;
