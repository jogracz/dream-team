import React, {
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { themes, Theme } from "../../constants/colors";

interface AppProviderValue {
  photos: string[];
  user: null;
  theme: Theme;
  popupOpen: boolean;
  photosTaken: number;
  signedUp: boolean;
  selectTheme: (newTheme: Theme) => void;
  addPhoto: (newPhoto: string) => void;
  removePhoto: (photoSrc: string) => void;
  openPopup: () => void;
  closePopup: () => void;
  setSignedUp: Dispatch<SetStateAction<boolean>>;
}

const defaultValue: AppProviderValue = {
  photos: [],
  user: null,
  theme: themes.beige,
  popupOpen: false,
  photosTaken: 0,
  signedUp: false,
  selectTheme: () => null,
  addPhoto: () => null,
  removePhoto: () => null,
  openPopup: () => null,
  closePopup: () => null,
  setSignedUp: () => null,
};

const AppContext = createContext(defaultValue);

interface AppProviderProps {
  children: any;
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;
  const [theme, setTheme] = useState(themes.beige);
  const [photos, setPhotos] = useState<string[]>([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [photosTaken, setPhotosTaken] = useState(0);
  const [signedUp, setSignedUp] = useState(
    localStorage.getItem("signedUP") === "true" ? true : false
  );

  const addPhoto = (newPhoto: string) => {
    setPhotos((photos) => [...photos, newPhoto]);
    setPhotosTaken((photosTaken) => photosTaken + 1);
  };

  const removePhoto = (photoSrc: string) => {
    setPhotos((photos) => photos.filter((photo) => photo !== photoSrc));
  };

  const selectTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const value = {
    photos,
    user: null,
    theme,
    popupOpen,
    photosTaken,
    signedUp,
    selectTheme,
    addPhoto,
    removePhoto,
    openPopup,
    closePopup,
    setSignedUp,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
