import React from 'react';
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';
import EnEfMeLogo from '../../EnEfMeLogo';
import MobileMenu from './MobileMenu';
import Menu from './Menu';
import { sitePrefix } from '../../../App';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px 10px;
  @media(max-width: 799px) {
    padding: 30px;
  }
  .desktop {
    @media(max-width: 499px) {
      display: none;
    }
  }
`
const LogoWrapper = styled.div`
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  span {
    padding-left: 5px;
  }
  @media(max-width: 599px) {
    font-size: 18px;
  }

`

//@TODO hidden points around the site! if you find them you get points and smth

const Header = () => {
  const { theme } = useAppContext();

  return (
    <HeaderWrapper theme={theme}>
      <NavLink to={`${sitePrefix}/`} exact>
        <LogoWrapper theme={theme}>
          <EnEfMeLogo />
          <span>EnEfMe</span>
        </LogoWrapper>
      </NavLink>
      <div className="desktop">
        <Menu />
      </div>
      
      <MobileMenu />
    </HeaderWrapper>
  )
}

export default Header;