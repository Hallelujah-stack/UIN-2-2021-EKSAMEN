import React from 'react';
import { Container, ScreenStyle, TitleH1 } from '../styles/Styles';
import Screen from '../components/Screen';

/**
 * Home bruker nå komponenten jeg har laget og sender en prop
 */

const Forside = () => (
  <>
    <Container>
      <TitleH1>
        <h1>Aktuelle nyheter</h1>
      </TitleH1>
      <ScreenStyle>
        <Screen />
      </ScreenStyle>
    </Container>
  </>
);

export default Forside;
