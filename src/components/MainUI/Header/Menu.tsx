import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { useAppContext } from '../../../context/AppContext/AppContext';
import { useGameContext } from '../../../context/GameContext/GameContext';
import { sitePrefix } from '../../../App';

const MenuWrapper = styled.div`
  display: flex;
  font-weight: 500;
  @media(max-width: 599px) {
    display: none;
  }
`
interface MenuElementProps {
  selected: boolean;
  theme: any;
}
export const MenuElement = styled.div`
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
  @media(max-width: 899px) {
    margin-left: 5px;
  }
  @media(max-width: 699px) {
    margin-left: 0px;
  }
`

const Menu = () => {
  const { theme, openPopup } = useAppContext();
  const { newAchievement } = useGameContext();
  const location = useLocation(); 

  return (
    <MenuWrapper>
      <MenuElement theme={theme} selected={location.pathname === '/'}>
        <NavLink to={`${sitePrefix}/`} exact>home</NavLink>
      </MenuElement>
      <MenuElement theme={theme} selected={location.pathname === '/about'}>
        <NavLink to={`${sitePrefix}/about`} exact>about</NavLink>
      </MenuElement>
      <MenuElement theme={theme} selected={location.pathname === '/my-pictures'}>
        <NavLink to={`${sitePrefix}/my-pictures`} exact>my pictures</NavLink>
      </MenuElement>
      <MenuElement theme={theme} selected={location.pathname === '/buy'} onClick={openPopup}>
        <NavLink to={`${sitePrefix}/buy`} exact>buy</NavLink>
      </MenuElement>
      <MenuElement theme={theme} selected={location.pathname === '/achievements'}>
        <NavLink to={`${sitePrefix}/achievements`} exact>achievements</NavLink>
        {newAchievement && <AiOutlineStar />}
      </MenuElement>
    </MenuWrapper>
  )
}

export default Menu;