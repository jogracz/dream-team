import React from 'react';
import styled from 'styled-components';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { useAppContext } from '../../../context/AppContext/AppContext';
import { achievementList} from '../../../context/GameContext/achievementList';

const CompletedSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Title = styled.div`
  font-size: 28px;
  text-align: center;
`

const Achievement = styled.div`
  height: 40px;
  border-radius: 5px;
  box-shadow: 0 1px 19px ${props => props.theme.secondBackground};
  line-height: 40px;
  font-size: 16px;
  padding:10px;
  svg {
    color: green; 
  }
`

const CompletedSection = () => {
  const { theme } = useAppContext();

  return (
    <CompletedSectionWrapper theme={theme}>
      <Title>{achievementList.length} completed</Title>
      { achievementList.map((a, index) => (
        <Achievement key={index} theme={theme}>
          <span>{a.text}</span>
        {a.points}
        <IoCheckmarkDoneSharp />
        </Achievement>
      ))}
    </CompletedSectionWrapper>
  )
}

export default CompletedSection;