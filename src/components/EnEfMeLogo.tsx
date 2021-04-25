import React from 'react';
import styled from 'styled-components';
import { ImEye } from 'react-icons/im';
import { useAppContext } from '../context/AppContext/AppContext';

const LogoWrapper = styled.div`
  font-size: 26px;
  font-weight: 700;
  height: 100%;
  display: flex;
  align-items: center;

  svg {

  }
`
const EnEfMeLogo = () => {
  const { theme } = useAppContext();

  return (
    <LogoWrapper theme={theme}>
      <ImEye />
    </LogoWrapper>
  )
}

export default EnEfMeLogo;