import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const navItems = [
  {
    name: 'Nasjonale Nyheter',
    href: '/Nasjonal',
  },
  {
    name: 'Globale Nyheter',
    href: '/Global',
  },
  {
    name: 'Sport',
    href: '/Sport',
  },
  {
    name: 'Kontakt Oss',
    href: '/Kontakt',
  },
];

const StyledNav = styled.nav`
  background-color: red;
  display: flex;
  align-items: center;
  height: 60px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const StyledNavUl = styled.ul`
  display: flex;
`;

const StyledNavLi = styled.li`
  color: white;
  font-size: 2rem;
  & a {
    color: white;
    text-decoration: none;
    padding: 2rem;
    &:hover {
      text-decoration: underline;
      color: lightgrey;
    }
    &.active {
      text-decoration: underline;
    }
  }
`;

const StyledImg = styled.img`
width: 130px;
padding-left 5px;
`;

const Navigation = () => (
  <StyledNav>
    <NavLink to="/">
      <StyledImg
        src="https://www.vg.no/gfx/icons/vg-logo.svg"
        alt="VG Logo"
        height="35px"
      />
    </NavLink>
    <StyledNavUl>
      {navItems.map((navItem) => (
        <StyledNavLi key={navItem.name}>
          <NavLink exact to={navItem.href} activeClassName="active">
            {navItem.name}
          </NavLink>
        </StyledNavLi>
      ))}
    </StyledNavUl>
  </StyledNav>
);

export default Navigation;
