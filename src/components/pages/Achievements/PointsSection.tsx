import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';

interface PointsSectionProps {
  points: number;
}

const PointsSectionWrapper = styled.div`
  color: ${props => props.theme.secondForeground};
`
const Points= styled.div`
  font-size: 175px;
  line-height: 135px;
  margin-bottom: 30px;
  span {
    font-size: 28px;
    color: ${props => props.theme.secondBackground};
    @media(max-width: 599px) {
      font-size: 18px;
    }
  }
  @media(max-width: 999px) {
    font-size: 155px;
  }
  @media(max-width: 899px) {
    font-size: 135px;
  }
  @media(max-width: 599px) {
    font-size: 55px;
    line-height: 60px;
  }
`

const PointsSection = (props: PointsSectionProps) => {
  const { theme } = useAppContext();
  const { points } = props;
  const pointsText = points === 1 ? 'point' : 'points';

  return (
    <PointsSectionWrapper theme={theme}>
      <Points theme={theme}>{points}<span>{pointsText}</span></Points>
    </PointsSectionWrapper>
  )
}

export default PointsSection;