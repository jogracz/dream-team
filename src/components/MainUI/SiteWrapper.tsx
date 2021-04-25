import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext/AppContext';
import Popup from './Popup';

interface SiteWrapperProps {
  children: any;
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.background};
  min-height: 100%;
  height: 100%;
  color: ${props => props.theme.foreground};
  a {
    color: ${props => props.theme.foreground};
  }
`

const SiteWrapper = (props: SiteWrapperProps) => {
  const { children}  = props;
  const { theme, popupOpen } = useAppContext();

  return (
    <Wrapper theme={theme}>
    { popupOpen && <Popup /> }
      {children}
    </Wrapper>
  )
}

export default SiteWrapper;