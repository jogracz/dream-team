import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';
import NewsletterSignup from './NewsletterSignup';

const AboutWrapper = styled.div`
  color: ${props => props.theme.foreground};
  font-size: 22px;
  // background-color: ${props => props.theme.secondBackground};
  // opacity: 0.5;
  // border: 3px solid ${props => props.theme.foreground};
  box-shadow: -0px -0px 20px ${props => props.theme.foreground};
  border-radius: 5px;
  padding: 40px;
  max-width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  @media(max-width: 999px) {
    font-size: 20px;
    max-width: 500px;
    height: 260px;
  }
  @media(max-width: 499px) {
    font-size: 16px;
  }
`
const About = () => {
  const { theme } = useAppContext();
  return (
    <AboutWrapper theme={theme}>
      DreamTeamLSD is a group of friends doing cool things together and trying to make money out of it. 
      Grab our free ebook or whatever and get hooked with whatever we currently do!
      Enjoy, have fun, play, collect.
      <NewsletterSignup />
    </AboutWrapper>
  )
}
export default About;