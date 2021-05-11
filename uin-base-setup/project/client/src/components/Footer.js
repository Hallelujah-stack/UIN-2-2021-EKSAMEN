import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  background-color: #2b2b2b;
`;

const StyledDl = styled.dl`
  margin: 0;
  font-size: 13px;
  font-size: var(--text-xs, 13px);
  line-height: 1.5;
  margin-bottom: 8px;
  margin-bottom: var(--space-sm, 8px);
`;

const StyledDt = styled.dt`
  display: inline-block;
  margin-bottom: 8px;
  margin-bottom: var(--space-sm, 8px);
  color: white;
`;

const Footer = () => (
  <StyledDiv>
    <div>
      <StyledDl aria-label="Kontakt Redaktørene">
        <StyledDt aria-label="Ansvarlig redaktør og administrerende direktør">
          "Ansv. redaktør og adm. direktør"
        </StyledDt>
        <dd>Gard Steiro</dd>
      </StyledDl>
    </div>
  </StyledDiv>
);

export default Footer;
