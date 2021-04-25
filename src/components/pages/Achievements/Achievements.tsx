import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../../context/AppContext/AppContext';
import { useGameContext } from '../../../context/GameContext/GameContext';
import PointsSection from './PointsSection';
import AchievementsSection from './AchievementsSection';

const AchievementsWrapper = styled.div`
  width: 80%;
  @media(max-width: 999px) {
    width: 90%;
  }
`
const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 400px;
  @media(max-width: 799px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`
const GetMore = styled.div`
  margin-top: 50px;
  cursor: pointer;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
  @media(max-width: 799px) {
    font-size: 18px;
  }
`

const Achievements = () => {
  const { theme, openPopup } = useAppContext();
  const { points, checkoutCompletedAchievements, newlyCompleted, completed, uncompleted } = useGameContext();

  useEffect(() => {
    setTimeout(() => checkoutCompletedAchievements(), 500)
  }, [])

  return (
    <AchievementsWrapper theme={theme}>
      <TopSection>
        <AchievementsSection 
          newlyCompleted={newlyCompleted}
          completed={completed}
          uncompleted={uncompleted}
        />
        <PointsSection points={points} />
      </TopSection>
      <GetMore onClick={openPopup}>Get more achievements</GetMore>
      {/* <CompletedSection /> */}
    </AchievementsWrapper>
  )
}

export default Achievements;