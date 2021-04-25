import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';
import NewsletterSignup from './NewsletterSignup';

const AboutWrapper = styled.div`
  box-shadow: -0px -0px 20px ${props => props.theme.foreground};
  border-radius: 5px;
  padding: 40px;
  max-width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media(max-width: 499px) {
    padding: 20px;
    height: 400px
  }
  @media(max-width: 399px) {
    padding: 20px;
    height: 450px
  }
`
const Text = styled.div`
  font-size: 22px;
  margin-bottom: 30px;
  @media(max-width: 999px) {
    font-size: 20px;
    /* max-width: 500px; */
    height: 260px;
  }
  @media(max-width: 499px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`

const About = () => {
  const { theme } = useAppContext();
  return (
    <AboutWrapper theme={theme}>
      <Text>
        DreamTeamLSD is a group of friends doing cool things together and trying to make money out of it. 
        Grab our free ebook or whatever and get hooked with whatever we currently do!
        Enjoy, have fun, play, collect.
      </Text>
      <NewsletterSignup />
    </AboutWrapper>
  )
}
export default About;