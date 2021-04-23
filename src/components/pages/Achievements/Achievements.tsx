import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';
import {achievementList} from './achievementList';

const AchievementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Achievement = styled.div`
  height: 40px;
  border-radius: 5px;
  box-shadow: 0 1px 19px ${props => props.theme.secondBackground};
  color: ${props => props.theme.foreground};
  line-height: 40px;
  font-size: 16px;
  padding:10px;
`

const Achievements = () => {
  const { theme } = useAppContext();

  return (
    <AchievementsWrapper theme={theme}>
      { achievementList.map((a, index) => (
        <Achievement key={index} theme={theme}>
          <span>{a.text}</span>
        {a.points}
        </Achievement>
      ))}
    </AchievementsWrapper>
  )
}

export default Achievements;