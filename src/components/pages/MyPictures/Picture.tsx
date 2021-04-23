import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';
import { MdDelete } from 'react-icons/md';
import { IoIosEye, IoMdClose } from 'react-icons/io';
import { IoCloudDownloadOutline } from 'react-icons/io5';

const fadeOutAnimation = keyframes`
`

const PhotoWrapper = styled.div`
  display: flex;
  margin: 8px;
  opacity 1;
  transition: opacity 1s linear;
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
`
interface PictureProps {
  src: string;
}

const Picture = (props: PictureProps) => {
  const { src } = props;
  const { theme, removePhoto } = useAppContext();
  const [hide, setHide] = useState(false);

  const handleRemove = () => {
    setHide(true);
    setTimeout(() => removePhoto(src), 1000);
  }

  return (
    <PhotoWrapper className={hide ? 'removed' : undefined}>
      <IconsWrapper theme={theme}>
        <IoMdClose onClick={handleRemove}/>
        <IoCloudDownloadOutline />
      </IconsWrapper>
      <Photo width={200} src={src} />
    </PhotoWrapper>
  )
}

export default Picture;