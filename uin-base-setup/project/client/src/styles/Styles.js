import styled from 'styled-components/macro';

export const Container = styled.section`
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
  min-height: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 1160px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 960px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    width: 740px;
  }
`;

export const ScreenStyle = styled.section`
  padding: 150px;
  margin: 25px;
  border: 3px solid rgb(220, 220, 220);
  border-radius: 10px;
  box-shadow: 2px 2px rgb(255, 245, 238);
`;
export const TitleH1 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
  font-family: Arial, sans-serif;
`;
