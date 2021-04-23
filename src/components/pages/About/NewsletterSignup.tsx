import React, {FormEvent, useState } from 'react';
import styled from 'styled-components';
import jsonp from 'jsonp';
import queryString from 'query-string';
import { useAppContext } from '../../../context/AppContext/AppContext';

const NewsletterSignupForm = styled.form`
  color: ${props => props.theme.foreground};
  font-size: 22px;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 999px) {
    font-size: 20px;
  }
  @media(max-width: 999px) {
    font-size: 16px;
  }
`
const EmailInput = styled.input`
  border-radius: 5px;
  height: 48px;
  width: 70%;
  padding-left: 20px;
  border: none;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(101, 101, 101, 0.5);
  outline: none;
`
const SubmitButton = styled.button`
  background-color: ${props => props.theme.secondForeground};
  color: ${props => props.theme.background};
  border: none;
  border-radius: 5px; 
  text-align: center;
  width: 200px;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  margin-left: 10px;
  outline: none;
`

const NewsletterSignup = () => {
  const { theme, subscribeToNewsletter } = useAppContext();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (email !== '') {
      const formData = {
        EMAIL: email,
      };
      jsonp(
        `${url}&${queryString.stringify(formData)}`,
        { param: 'c'},
        (err, data) => {
          console.log(err);
          console.log(data);
      })
    }
  }
 
const url = "https://gmail.us1.list-manage.com/subscribe/post-json?u=20d1bd952ead567e9f377af6b&amp;id=59049595e5";

  
  return (
    <NewsletterSignupForm theme={theme} method='get' onSubmit={(e) => handleSubmit(e)}>
      <EmailInput theme={theme} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Your email' />
      <SubmitButton theme={theme}>Signup</SubmitButton>
    </NewsletterSignupForm>
  )
}
export default NewsletterSignup;
