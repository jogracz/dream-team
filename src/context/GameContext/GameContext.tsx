import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useAppContext } from "../AppContext/AppContext";
import { achievementList } from "../GameContext/achievementList";

export interface Achievement {
  id: number;
  text: string;
  points: number;
  status: string;
  link: string;
}

interface GameProviderValue {
  points: number;
  newAchievement: boolean;
  checkoutCompletedAchievements: () => void;
  uncompleted: Achievement[];
  newlyCompleted: Achievement[];
  completed: Achievement[];
}

const defaultValue: GameProviderValue = {
  points: 30,
  newAchievement: true,
  checkoutCompletedAchievements: () => null,
  uncompleted: achievementList,
  newlyCompleted: [],
  completed: [],
};

const GameContext = createContext(defaultValue);

interface GameProviderProps {
  children: any;
}

export const GameProvider = (props: GameProviderProps) => {
  const { children } = props;
  const { photosTaken, signedUp } = useAppContext();
  const [points, setPoints] = useState(30);
  const [newlyCompleted, setNewlyCompleted] = useState<Achievement[]>([]);
  const [completed, setCompleted] = useState<Achievement[]>([]);
  const [uncompleted, setUncompleted] =
    useState<Achievement[]>(achievementList);
  const [newAchievement, setNewAchievement] = useState(true);

  const addPoints = (pointsToAdd: number) => {
    setPoints((points) => points + pointsToAdd);
  };

  const completeAchievement = (achievementId: number) => {
    addPoints(achievementList[achievementId].points);
    setUncompleted((uncompleted) =>
      uncompleted.filter((a) => a.id !== achievementId)
    );
    setNewlyCompleted((newlyCompleted) => [
      ...newlyCompleted,
      achievementList[achievementId],
    ]);
    setNewAchievement(true);
  };

  console.log("App Context renders");

  const checkoutCompletedAchievements = () => {
    setCompleted((completed) => [...completed, ...newlyCompleted]);
    setNewlyCompleted([]);
    setNewAchievement(false);
  };

  useEffect(() => {
    if (photosTaken === 1) {
      completeAchievement(0);
    } else if (photosTaken === 5) {
      completeAchievement(1);
    }
    if (signedUp) {
      completeAchievement(2);
    }
  }, [photosTaken, signedUp, completeAchievement]);

  const value = {
    points,
    newAchievement,
    checkoutCompletedAchievements,
    uncompleted,
    newlyCompleted,
    completed,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

export const useGameContext = () => useContext(GameContext);
