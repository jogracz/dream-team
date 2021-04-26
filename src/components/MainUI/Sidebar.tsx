import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../context/AppContext/AppContext';
import {THEMES, themes} from '../../constants/colors';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  left: 10px;
  width: 80px;
  @media(max-width: 599px) {
    top: 70px;
    width: 95%;
    flex-direction: row;
    justify-content: center;
  }
`
interface SidebarElementProps {
  selected: boolean;
  theme: any;
}
const SidebarElement = styled.div`
  margin: 5px;
  padding: 5px;
  border: 2px solid pink;
  border-radius: 16px;
  text-align: center;
  border-color: ${(props: SidebarElementProps) => props.selected ? props.theme.secondBackground : 'transparent'};
  color: ${(props: SidebarElementProps) => props.theme.foreground};
  cursor: pointer;
  font-size: 12px;
`

interface SidebarProps {

}

const Sidebar = (props: SidebarProps) => {
  const { theme, selectTheme } = useAppContext();
  const trackThemeClick = (theme: string) => {
    let window: any;
    window.dataLayer.push({
      event: `${theme}-theme-clicked`,
    });
  }
  return (
    <SidebarWrapper theme={theme}>
      <SidebarElement 
        theme={theme}
        selected={theme === themes.bedge}
        onClick={() => selectTheme(themes.bedge)}
      >
        {THEMES.bedge}
      </SidebarElement>
      <SidebarElement 
        theme={theme}
        selected={theme === themes.white}
        onClick={() => {
          selectTheme(themes.white);
          trackThemeClick('white');
        }}
      >
        {THEMES.white}
      </SidebarElement>
      <SidebarElement 
        theme={theme}
        selected={theme === themes.blue}
        onClick={() => selectTheme(themes.blue)}
      >
        {THEMES.blue}
      </SidebarElement>
    </SidebarWrapper>
  )
}

export default Sidebar;