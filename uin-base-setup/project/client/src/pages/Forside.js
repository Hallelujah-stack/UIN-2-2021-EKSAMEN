import React from 'react';
import { Container, ScreenStyle, TitleH1 } from '../styles/Styles';
import Screen from '../components/Screen';
import Cards from '../components/Cards';

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
      <Cards>
        <div>
          <p>div1</p>
        </div>
        <div>
          <p>div2</p>
        </div>
        <div>
          <p>div1</p>
        </div>
        <div>
          <p>div2</p>
        </div>
      </Cards>
    </Container>
  </>
);

export default Forside;
