import React, {Dispatch, FormEvent, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import jsonp from 'jsonp';
import queryString from 'query-string';
import { useAppContext } from '../../../context/AppContext/AppContext';

interface NewsletterSignupFormProps {
  setResult: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
}

const Form = styled.form`
  font-size: 22px;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 999px) {
  
  }
  @media(max-width: 499px) {
    flex-direction: column;
    gap: 10px;
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
  @media(max-width: 499px) {
    width: 100%;
  }
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
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.7;
  }
  @media(max-width: 499px) {
    width: 100%;
    margin: 0;
  }
`

const NewsletterSignupForm = (props: NewsletterSignupFormProps) => {
  const { setResult, setMessage } = props;
  const { theme, setSignedUp } = useAppContext();
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (email !== '') {
      const url = process.env.REACT_APP_MAILCHIMP_URL;
      if (email !== '') {
        const formData = {
          EMAIL: email,
        };
        jsonp(
          `${url}&${queryString.stringify(formData)}`,
          { param: 'c'},
          (err, data) => {
            data && setResult(data.result);
            data && setMessage(data.msg);
            if (data.result !== 'error') {
              setSignedUp(true);
              localStorage.setItem('signedUp', 'true');
            } 

        })
      }  
    }
  }
  
  return (
    <Form theme={theme} method='get' onSubmit={(e) => handleSubmit(e)}>
      <EmailInput theme={theme} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Your email' />
      <SubmitButton theme={theme}>Signup</SubmitButton>
    </Form>
  )
}
export default NewsletterSignupForm;
