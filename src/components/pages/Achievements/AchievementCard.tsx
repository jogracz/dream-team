import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';
import { useAppContext } from '../../../context/AppContext/AppContext';
import {Achievement} from '../../../context/GameContext/GameContext'

interface AchievementProps {
  achievement: Achievement;
  completed: boolean;
}
interface AchievementWrapperProps {
  theme: any;
  completed: boolean;
}

const AchievementWrapper = styled.div`
  cursor: ${(props: AchievementWrapperProps) => props.completed ? 'default' : 'pointer'};
  height: 40px;
  border-radius: 5px;
  box-shadow: 0 1px 10px ${(props: AchievementWrapperProps) => props.completed ? props.theme.secondForeground : props.theme.secondBackground};
  line-height: 100%;
  font-size: 16px;
  padding:10px;
  display: flex;
  justify-content: space-between;
  width: 230px;
  &:hover {
    box-shadow: 0 1px 13px ${(props: AchievementWrapperProps) => props.theme.secondForeground};
  }
  svg {
    color: ${props => props.theme.secondForeground};
    height: 100%;
  }
`
const Points = styled.span`
  color: ${props => props.theme.secondForeground};
  font-weight: 800;
`
const AchievementCard = (props: AchievementProps) => {
  const { achievement: {text, points, link}, completed  } = props;
  const { theme } = useAppContext();
  
  if (completed) {
    return (
      <AchievementWrapper theme={theme} completed={completed}> 
        <span>{text}</span>
        {completed ? <IoCheckmarkDoneSharp /> : <Points theme={theme}>{points}</Points>}
      </AchievementWrapper>
    )
  } else {
    return (
    <NavLink to={link} >
      <AchievementWrapper theme={theme} completed={completed}> 
        <span>{text}</span>
        {completed ? <IoCheckmarkDoneSharp /> : <Points theme={theme}>{points}</Points>}
      </AchievementWrapper>
    </NavLink>
  )
  }
  
}

export default AchievementCard;