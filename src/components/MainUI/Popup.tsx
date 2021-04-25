import React from 'react';
import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import { useAppContext } from '../../context/AppContext/AppContext';
import EnEfMeLogo from '../EnEfMeLogo';

const PopupWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: #333;
`
const PopupCard = styled.div`
  position: relative;
  width: 350px;
  background-color: ${props => props.theme.secondBackground};
  margin-top: -200px;
`
const PopupContent = styled.div`
  height: 100%;
  border: 2px solid;
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

`
const CloseIconWrapper = styled.div`
  background-color: ${props => props.theme.secondBackground};
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1000;
  svg {
    width: 20px;
    height: 20px;
  }
`
const Title = styled.div`
  font-size: 28px;
  font-style: bold;
  margin-bottom: 12px;
`
const Subitle = styled.div`
  font-size: 18px;
  font-style: normal;  
  margin-bottom: 20px;
`

const Popup = () => {
  const { theme, closePopup } = useAppContext();

  return (
    <PopupWrapper theme={theme}>
      <PopupCard theme={theme}>
        <CloseIconWrapper theme={theme}>
          <GrFormClose onClick={closePopup} />
        </CloseIconWrapper>
        <PopupContent>
          <Title>
            This feature isn't available yet
          </Title>
          <Subitle>
            We're implementing it right when you read this...
          </Subitle>
          <EnEfMeLogo />
        </PopupContent>
      </PopupCard>
    </PopupWrapper>
  )
}

export default Popup;