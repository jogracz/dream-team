import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { useAppContext } from '../../context/AppContext/AppContext';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  border-top: 2px solid pink;
  border-color: ${props => props.theme.secondBackground};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LogoWrapper = styled.div`
  width: 200px;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    padding-left: 5px;
  }
  .logoIcon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
`

const Footer = () => {
  const { theme } = useAppContext();

  return (
    <FooterWrapper theme={theme}>
      <NavLink to={'/about'} exact>
        <LogoWrapper theme={theme}>
          <AiOutlineThunderbolt className='logoIcon' />
          <span>DreamTeamLSD</span>
        </LogoWrapper>
      </NavLink>
    </FooterWrapper>
  )
}

export default Footer;