import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    align-items: center;
    background-color: #2b2b2b;
    bottom: 0;
    position: absolute;
    width: 100%;
    padding: 1rem;
    & p {
        color: white;
        text-decoration: none;
        padding: .5rem
`;

const StyledDiv2 = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const StyledDiv3 = styled.div`
  margin-left: 500px;
  margin-right: 20px;
`;

const Footer = () => (
  <StyledDiv>
    <StyledDiv3>
      <p>Ansv. redaktør og adm. direktør: Gard Steiro</p>
      <p>Nyhetsredaktør: Tora Bakke Håndlykken</p>
      <p>Utviklingsredaktør: Øyvind Brenne</p>
      <p>Redaktør Feature/VG+: Jane Throndsen</p>
      <p>Politisk redaktør: Hanne Skartveit</p>
    </StyledDiv3>
    <StyledDiv2>
      <p>Tips oss på: 22 00 00 00 eller SMS 2200</p>
      <p>E-post til tusentipset: 2200@vg.no</p>
      <p>
        VG har ikke ansvar for innhold på eksterne nettsider
        <br />
        som det lenkes til. Kopiering av materiale fra VG for
        <br /> bruk annet sted er ikke tillatt uten avtale.
      </p>
    </StyledDiv2>
  </StyledDiv>
);

export default Footer;
