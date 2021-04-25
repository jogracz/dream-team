import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';
import Picture from './Picture';

const MyPicturesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const MyPictures = () => {
  const {photos} = useAppContext();

  return (
    <MyPicturesWrapper>
      {photos.map((src,index) => 
        (
          <Picture key={src} src={src} />   
        )
      )}
    </MyPicturesWrapper>
  )
}

export default MyPictures;