import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";
import { Box, Button, CssBaseline, Paper, Typography } from "@mui/material";

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Box sx={{m : 10}}>
        <Button variant="contained" size="large">
          Current Theme
        </Button>
        <ThemeToggler />
      </Box>
    </ThemeContextProvider>
  );
}

export default App;
