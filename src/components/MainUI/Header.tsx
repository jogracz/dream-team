import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { ImEye } from 'react-icons/im';
import { AiOutlineStar } from 'react-icons/ai';
import { useAppContext } from '../../context/AppContext/AppContext';


const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 60px 10px;
  a {
    text-decoration: none;
    color: ${props => props.theme.foreground};
  }
 
`
const LogoWrapper = styled.div`
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  a {
    color: ${props => props.theme.foreground};
    background-color: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  }
  span {
    padding-left: 5px;
  }
  .logoIcon {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    
  }
`
const MenuWrapper = styled.div`
  display: flex;
  font-weight: 500;
`
interface MenuElementProps {
  selected: boolean;
  theme: any;
}
const MenuElement = styled.div`
  padding: 3px 8px;
  font-size: 16px;
  margin-left: 15px;
  cursor: pointer;
  border: 2px solid pink;
  border-radius: 16px;
  border-color: ${(props: MenuElementProps) => props.selected ? props.theme.secondBackground : 'transparent'};
  position: relative;
  svg {
    position: absolute;
    right: -3px;
    top: -3px;
    color: ${(props: MenuElementProps) => props.theme.foreground};
  }

`
//@TODO hidden points around the site! if you find them you get points and smth
interface HeaderProps {
}
const Header = () => {

  const { theme } = useAppContext();
  const location = useLocation();

  return (
    <HeaderWrapper theme={theme}>
      {/* <Router> */}
      <LogoWrapper theme={theme}>
        <NavLink to={'/'} exact>
          <ImEye className='logoIcon' />
          <span>EnEfMe</span>
        </NavLink>
      </LogoWrapper>
      <MenuWrapper>
        <MenuElement theme={theme} selected={location.pathname === '/'}>
          <NavLink to={'/'} exact>home</NavLink>
        </MenuElement>
        <MenuElement theme={theme} selected={location.pathname === '/about'}>
          <NavLink to={'/about'} exact>about</NavLink>
        </MenuElement>
        <MenuElement theme={theme} selected={location.pathname === '/my-pictures'}>
          <NavLink to={'/my-pictures'} exact>my pictures</NavLink>
        </MenuElement>
        <MenuElement theme={theme} selected={location.pathname === '/buy'}>
          <NavLink to={'/buy'} exact>buy</NavLink>
        </MenuElement>
        <MenuElement theme={theme} selected={location.pathname === '/achievements'}>
          <NavLink to={'/achievements'} exact>achievements</NavLink>
          <AiOutlineStar />
        </MenuElement>
      </MenuWrapper>
      {/* </Router> */}
    </HeaderWrapper>
  )
}

export default Header;