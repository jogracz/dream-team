import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext/AppContext';


const Wrapper = styled.div`
  background-color: ${props => props.theme.background};
  min-height: 100vh;
`

interface SiteWrapperProps {
  children: any;
}

const SiteWrapper = (props: SiteWrapperProps) => {
  const { children}  = props;
  const { theme } = useAppContext();

  return (
    <Wrapper theme={theme}>{children}</Wrapper>
  )
}

export default SiteWrapper;