import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';
import NewsletterSigupForm from './NewsletterSignupForm';

const NewsletterSignupWrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Title = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  @media(max-width: 699px) {
    font-size: 18px;
  }
`
interface FormMessageWrapperProps {
  error: boolean;
}
const FormMessageWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  color: ${(props: FormMessageWrapperProps) => props.error ? 'orange' : 'green'};
  font-size: 16px;
  @media(max-width: 499px) {
    font-size: 14px;
  }
`
const ThankYou = styled.div`
  text-align: center;
  font-size: 24px;
  color: ${props => props.theme.secondForeground};
`

const NewsletterSignup = () => {
  const { signedUp, theme } = useAppContext();
  const [result, setResult] = useState('');
  const [message, setMessage] = useState('');
  console.log(result)
  console.log(message)

  if (signedUp) {
    return (
      <ThankYou theme={theme}>You signed up for our newsletter and you're awesome!</ThankYou>
    )
  } else {
     return (
      <NewsletterSignupWrapper>
        <Title>Get more points, advice and only goodness!</Title>
        <NewsletterSigupForm setResult={setResult} setMessage={setMessage} />
        {result === 'error' && (
          <FormMessageWrapper error={true}>Something went wrong</FormMessageWrapper>
        )}
      </NewsletterSignupWrapper>
    ) 
  }
  
}
export default NewsletterSignup;
