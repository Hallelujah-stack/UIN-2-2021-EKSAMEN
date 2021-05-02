import React from 'react';
import { Container, ScreenStyle, TitleH1 } from '../styles/Styles';
import Screen from '../components/Screen';
import Cards from '../components/Cards';
import Card from '../components/Card';




const Forside = () => (
  <>
    <Container>
      <TitleH1>
        <h1>Aktuelle nyheter</h1>
      </TitleH1>
      <ScreenStyle>
        <Screen />
      </ScreenStyle>
      <Cards>
        <Card />
      </Cards>
    </Container>
  </>
);

const Forside = () => (
  <>
    <Container>
      <TitleH1>
        <h1>Aktuelle nyheter</h1>
      </TitleH1>
      <ScreenStyle>
        <Screen />
      </ScreenStyle>
      <Cards>
        <Card />
      </Cards>
    </Container>
  </>
);

export default Forside;
