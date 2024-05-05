import ThemeContextProvider from "@/context/ThemeContext";
import { CssBaseline } from "@mui/material";

export default function ThemeProviderWrapper({ children }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
