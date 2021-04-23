import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppContext } from '../context/AppContext/AppContext';
import { ImSpinner9 } from 'react-icons/im';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  z-index: -10;
  position: relative;
  top: 175px;
  width: 100%;
  height: 100%;
  svg {
    width: 50px;
    height: 50px;
    animation: ${rotate} 2s linear infinite;
    color: ${props => props.theme.secondBackground};
  }
`
const Loader = () => {
  const { theme } = useAppContext();

  return (
    <LoaderWrapper theme={theme}>
      <ImSpinner9 />
    </LoaderWrapper>
  )
}

export default Loader;