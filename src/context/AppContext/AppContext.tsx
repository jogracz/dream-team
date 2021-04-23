import React, { useState, createContext, useContext} from 'react';
import { THEMES, themes, Theme } from '../../constants/colors';

interface AppProviderValue {
  points: number;
  photos: string[],
  user: null,
  theme: Theme,
  selectTheme: (newTheme: Theme) => void,
  addPhoto: (newPhoto: string) => void,
  removePhoto: (photoSrc: string) => void;
  subscribeToNewsletter: (email: string) => void;
  addPoints: (pointsToAdd: number) => void;
}

const defaultValue: AppProviderValue = {
  points: 30,
  photos: [],
  user: null,
  theme: themes.bedge,
  selectTheme: (newTheme: Theme) => null,
  addPhoto: (newPhoto: string) => null,
  removePhoto: (photoSrc: string) => null,
  subscribeToNewsletter: (email: string) => null,
  addPoints: (pointsToAdd: number) => null,

}

const AppContext = createContext(defaultValue);

interface AppProviderProps {
  children: any;
}


export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  const [theme, setTheme] = useState(themes.bedge);
  const [photos, setPhotos] = useState<string[]>([]);
  const [points, setPoints] = useState(30);

  const addPhoto = (newPhoto: string) => {
    setPhotos(photos => [...photos, newPhoto]);
  }

  const removePhoto = (photoSrc: string) => {
    setPhotos(photos => photos.filter(photo => photo !== photoSrc));
  }

  const selectTheme = (newTheme: Theme ) => {
    setTheme(newTheme) ;
  }

  const subscribeToNewsletter = () => {

  }

  const addPoints = (pointsToAdd: number) => {
    setPoints(points => points + pointsToAdd);
  }

  const value = {
    points,
    photos,
    user: null,
    theme,
    selectTheme,
    addPhoto,
    removePhoto,
    subscribeToNewsletter,
    addPoints
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext);