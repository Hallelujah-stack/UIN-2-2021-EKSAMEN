import styled from "styled-components/macro";

const StyledLead = styled.p`
text-align: center;
font size: 1.5rem;
font weight: 250;
line-height: 1.5;
margin-bottom: 2rem;
`;

const Lead = ({lead}) => <StyledLead>{lead}</StyledLead>;

export default Lead;