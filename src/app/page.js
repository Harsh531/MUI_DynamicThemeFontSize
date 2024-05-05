
import ThemeToggler from "@/components/ThemeToggler";
import { Box, Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box sx={{m : 5}}>
        <Button variant="contained" size="large">
          Current Theme
        </Button>
        <ThemeToggler />
      </Box>
    </main>
  );
}
