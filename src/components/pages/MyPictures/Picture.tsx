import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';
import { IoMdClose } from 'react-icons/io';
import { IoCloudDownloadOutline } from 'react-icons/io5';

const PhotoWrapper = styled.div`
  display: flex;
  margin: 8px;
  transition: opacity 0.7s linear;
  &.removed {
    opacity: 0;
  }
`
const IconsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  color: ${props => props.theme.secondForeground};
  opacity: 0.7;
  svg {
    cursor: pointer;
  }
`
const Photo = styled.img`
  width: 200px;
  margin: 5px;
  margin-bottom: 10px;
  border-radius: 3px;
  /* @media(max-width: 799px) {
    width: 170px;
  }
  @media(max-width: 599px) {
    width: 150px;
  } */
`
interface PictureProps {
  src: string;
}

const Picture = (props: PictureProps) => {
  const { src } = props;
  const { theme, removePhoto, openPopup } = useAppContext();
  const [hide, setHide] = useState(false);

  const handleRemove = () => {
    setHide(true);
    setTimeout(() => removePhoto(src), 600);
  }

  return (
    <PhotoWrapper className={hide ? 'removed' : undefined}>
      <IconsWrapper theme={theme}>
        <IoMdClose onClick={handleRemove}/>
        <IoCloudDownloadOutline onClick={openPopup}/>
      </IconsWrapper>
      <Photo width={200} src={src} />
    </PhotoWrapper>
  )
}

export default Picture;