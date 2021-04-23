import React, { useState } from 'react';
import styled from 'styled-components';
import Webcam from "react-webcam";
import { useAppContext } from '../../../context/AppContext/AppContext';
import Loader from '../../Loader';

const PhotoTakerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const WebcamWrapper = styled.div`
 border-radius: 5px;
 z-index: 10;
`
const Button = styled.div`
  width: 170px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px; 
  text-align: center;
  background-color: ${props => props.theme.secondForeground};
  color: ${props => props.theme.background};
  margin-top: 20px;
  margin-bottom: 40px;
  cursor: pointer;
  font-weight: 800;
`
const PhotosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  gap: 10px;
  opacity: 0.8;
`

const PhotoTaker = () => {
  const { addPhoto, theme } = useAppContext();
  const webcamRef = React.useRef<Webcam>(null);
  const [photosArray, setPhotosArray] = useState<string[]>([]);

  const capture = React.useCallback(
    () => {
      const imageSrc = (webcamRef.current !== null && webcamRef !== null) ? webcamRef.current.getScreenshot() : null;
      imageSrc && setPhotosArray(photos => [...photos, imageSrc]);
      imageSrc && addPhoto(imageSrc);
    },  
    [webcamRef]
  );

  return (
    <PhotoTakerWrapper>
      <WebcamWrapper>
        <Loader />
        <Webcam
          height={300}
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          />
      </WebcamWrapper>  
      <Button theme={theme} onClick={capture}>Catch</Button>
      <PhotosWrapper>
        {photosArray.map((photo, index) => (
          <img width={100} key={index} src={photo || undefined} />
        ))}
      </PhotosWrapper>
    
      
    </PhotoTakerWrapper>
  )
}

export default PhotoTaker;