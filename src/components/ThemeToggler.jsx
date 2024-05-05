"use client";

import { Box, Button, Typography, useTheme } from "@mui/material";
import { useContext } from "react";

import baseTheme, { COLORS, Theme1, Theme2 } from "@/theme";
import { ThemeContext, useThemeContext } from "@/context/ThemeContext";

function ThemeToggler() {
  const { handleSwitch, handleFontSize, BASE_FONTSIZE } = useThemeContext();
  const theme = useTheme();

  return (
    <div>
      <Box sx={{ mt: 5, }}>
        <Typography>Theme</Typography>
        <Box sx={{ display: "flex", gap: 5 }}>
          <Box
            onClick={() => handleSwitch(baseTheme)}
            sx={{
              background: COLORS.one.primary,
              width: 100,
              height: 100,
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />

          <Box
            onClick={() => handleSwitch(Theme1)}
            sx={{
              background: COLORS.two.primary,
              width: 100,
              height: 100,
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />

          <Box
            onClick={() => handleSwitch(Theme2)}
            sx={{
              background: COLORS.three.primary,
              width: 100,
              height: 100,
              borderRadius: "10px",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Typography>fontsize change: {theme.typography.fontSize}</Typography>
        <Box sx={{ display: "flex", gap: 5 }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleFontSize(BASE_FONTSIZE * 1)}
          >
            1x
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleFontSize(BASE_FONTSIZE * 1.25)}
          >
            1.25x
          </Button>

          <Button
            variant="contained"
            size="small"
            onClick={() => handleFontSize(BASE_FONTSIZE * 1.5)}
          >
            1.5x
          </Button>

          <Button
            variant="contained"
            size="small"
            onClick={() => handleFontSize(BASE_FONTSIZE * 1.75)}
          >
            1.75x
          </Button>

          <Button
            variant="contained"
            size="small"
            onClick={() => handleFontSize(BASE_FONTSIZE * 2)}
          >
            2x
          </Button>
        </Box>

        <p>
          lksjkldf jlksdjf lkdsjflkj sdlkfjlksdj flk slkdjflk sdlkfj lksdj
          flksjdlfk jslkd flksjd lfkjdslk fjlkdsj
          flkjdslkfjlkdsjlgkhsglkndflkglkfjk jlksdj flksdjkfl lksdjflk sdjf
          jlksdjflk jsdlk fjlksdj flkjdslkfjlkdsj flksd fk
        </p>
      </Box>
    </div>
  );
}

export default ThemeToggler;
