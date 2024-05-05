import { createTheme } from "@mui/material/styles";
import { deepOrange, deepPurple, lime } from "@mui/material/colors";

const COLORS = {
  one: { primary: "#20b2aa", secondary: "#b388ff" },
  two: { primary: lime[500], secondary: "#E0C2FF" },
  three: { primary: deepOrange[500], secondary: "#E0C2FF" },
};


const baseTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.one.primary,
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: COLORS.one.secondary,
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
  shape: {
    borderRadius: 50,
  },
  typography: {
    fontSize: 10,
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1,
          borderRadius: 10,
        },
      },
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: deepPurple[800],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#393e46",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

const Theme1 = createTheme({
  palette: {
    primary: {
      main: COLORS.two.primary,
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: COLORS.two.secondary,
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
  shape: {
    borderRadius: 50,
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1,
          borderRadius: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#393e46",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

const Theme2 = createTheme({
  palette: {
    primary: {
      main: COLORS.three.primary,
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: COLORS.three.secondary,
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
  shape: {
    borderRadius: 50,
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          margin: 1,
          borderRadius: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#393e46",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

export { COLORS, Theme1, Theme2 };

export default baseTheme;
