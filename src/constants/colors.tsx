export const white = "#FFFFFF";
export const lightGreenGRay = "#F7F7F7";
export const greenGray = "#7DA2A9";
export const grey = "#444";

// Pantone colors of the year 2021
export const pantoneYellow = "#F5DF4D";
export const pantoneGrey = "#939597";

// LIGHT
export const lightGrey = "#DCE1E3";
export const greyWater = "#5C5F58";
export const blueMinded = "#004E7C";
export const redHighlight = "#B73225";

// DARK

export interface Theme {
  foreground: string;
  background: string;
  secondBackground: string;
  secondForeground: string;
}

export const THEMES = {
  beige: "beige",
  white: "white",
  blue: "blue",
};

export const themes = {
  beige: {
    foreground: "#4F4846",
    background: "#FDF8F5",
    secondBackground: "#E8CEBF",
    secondForeground: "#266150",
  },
  white: {
    foreground: "#4F4846",
    background: "#FFF",
    secondBackground: pantoneYellow,
    lightBackground: pantoneGrey,
    secondForeground: blueMinded,
  },
  blue: {
    foreground: "white",
    background: blueMinded,
    secondBackground: "#E8CEBF",
    lightBackground: blueMinded,
    secondForeground: pantoneYellow,
  },
};
