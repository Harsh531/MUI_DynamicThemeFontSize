import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useState } from "react";

import { deepmerge } from "@mui/utils";
import baseTheme from "../theme/theme";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(baseTheme);
  const [fontSize, setFontSize] = useState(16);

  const handleSwitch = (whichTheme) => {
    const whichThemeWithFontSize = {
      ...whichTheme,
      typography: {
        fontSize: fontSize,
      },
    };
    const newTheme = deepmerge(theme, whichThemeWithFontSize);
    setTheme(createTheme(newTheme));
    console.log(newTheme, "whichTheme");
  };

  const handleFontSize = (size) => {
    console.log(size, "fontsize");
    let newTheme = {
      ...theme,
      typography: {
        fontSize: size,
      },
    };

    setTheme(createTheme(newTheme));
    console.log(newTheme, "whichTheme");
  };

  //   useEffect(() => {
  //     handleSwitch(theme);
  //     console.log('fontsize')
  //   }, [fontSize]);

  const values = {
    theme,
    setTheme,
    handleSwitch,
    handleFontSize,
    fontSize,
    setFontSize,
  };
  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
// export function useThemeContext() {
//     return useContext(ThemeContext)
// }
