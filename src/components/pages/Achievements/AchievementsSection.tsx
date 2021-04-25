import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';
import { Achievement } from '../../../context/GameContext/GameContext';
import AchievementCard from './AchievementCard';

interface AchievementsSectionProps {
  newlyCompleted: Achievement[],
  completed: Achievement[],
  uncompleted: Achievement[],
}

const AchievementsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const AchievementsSection = (props: AchievementsSectionProps) => {
  const { newlyCompleted, completed, uncompleted } = props;
  const { theme } = useAppContext();

  return (
    <AchievementsSectionWrapper theme={theme}>
      Uncompleted
      { newlyCompleted.map((achievement, index) => 
        <AchievementCard key={index} achievement={achievement} completed={false} />
      )}
      { uncompleted.map((achievement, index) => 
        <AchievementCard key={index} achievement={achievement} completed={false}/>
      )}
      <p></p>
      Completed
      { completed.map((achievement, index) => 
        <AchievementCard key={index} achievement={achievement} completed={true}/>
      )}
    </AchievementsSectionWrapper>
  )
}

export default AchievementsSection;