import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { white } from '../../../constants/colors';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import PhotoTaker from '../PhotoTaker/PhotoTaker';

const HomeWrapper = styled.div``

const Home = () => {
  return (
    <HomeWrapper>
      <PhotoTaker />
    </HomeWrapper>
  )
}

export default Home;