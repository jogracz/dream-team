import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext/AppContext';


const Content = styled.div`
  background-color: ${props => props.theme.background};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  // margin-top: -60px;
  padding: 50px 5%;
  padding-left: 120px;
`

interface SiteWrapperProps {
  children: any;
}

const SiteContent= (props: SiteWrapperProps) => {
  const { children}  = props;
  const { theme } = useAppContext();

  return (
    <Content theme={theme}>{children}</Content>
  )
}

export default SiteContent;