import React from 'react';
import styled from 'styled-components';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { useAppContext } from '../../context/AppContext/AppContext';

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  border-top: 2px solid pink;
  border-color: ${props => props.theme.secondBackground};
  // box-shadow: -0px -1px 30px ${props => props.theme.foreground};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LogoWrapper = styled.div`
  color: ${props => props.theme.foreground};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  height: 30px;
  display: flex;
  align-items: center;
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
      <LogoWrapper theme={theme}>
        <AiOutlineThunderbolt className='logoIcon' />
        <span>DreamTeamLSD</span>
        </LogoWrapper>
    </FooterWrapper>
  )
}

export default Footer;