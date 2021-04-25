import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
import { CgMenuRight } from 'react-icons/cg';
import { GrClose } from 'react-icons/gr';
import { useAppContext } from '../../../context/AppContext/AppContext';
import { useGameContext } from '../../../context/GameContext/GameContext';
import {MenuElement} from './Menu';

const MobileMenuWrapper = styled.div`
  font-size: 32px;
  display: flex;
  align-items: center;
  svg {
   cursor: pointer;
  }
  @media(min-width: 600px) {
    display: none;
  }
`
const MenuModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.secondBackground};
  padding: 35px;
`
const ModalContent = styled.div`
  border: 2px solid ${props => props.theme.secondBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 20px;
`
const CloseButton = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.background};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${props => props.theme.secondBackground};
  svg {
    color: ${props => props.theme.secondBackground};
  }
`

const MobileMenu = () => {
  const { theme } = useAppContext();
  const { newAchievement } = useGameContext();
  const location = useLocation(); 
  const [open, setOpen] = useState(false);

  return (
    <MobileMenuWrapper>
      {open && (
        <MenuModal theme={theme}>
          <CloseButton theme={theme}>
            <GrClose onClick={() => setOpen(false)}/>
          </CloseButton>
          <ModalContent>
              <MenuElement theme={theme} selected={location.pathname === '/'} onClick={() => setOpen(false)}>
            <NavLink to={'/'} exact>home</NavLink>
          </MenuElement>
          <MenuElement theme={theme} selected={location.pathname === '/about'} onClick={() => setOpen(false)}>
            <NavLink to={'/about'} exact>about</NavLink>
          </MenuElement>
          <MenuElement theme={theme} selected={location.pathname === '/my-pictures'} onClick={() => setOpen(false)}>
            <NavLink to={'/my-pictures'} exact>my pictures</NavLink>
          </MenuElement>
          {/* <MenuElement theme={theme} selected={location.pathname === '/buy'} onClick={openPopup}>
            <NavLink to={'/buy'} exact>buy</NavLink>
          </MenuElement> */}
          <MenuElement theme={theme} selected={location.pathname === '/achievements'} onClick={() => setOpen(false)}>
            <NavLink to={'/achievements'} exact>achievements</NavLink>
            {newAchievement && <AiOutlineStar />}
          </MenuElement>
          </ModalContent>
          
        </MenuModal>
      )}
      <CgMenuRight onClick={() =>setOpen(true)} />
    </MobileMenuWrapper>
  )
}

export default MobileMenu;