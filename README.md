# 1. create theme/theme.js file

# 2. add multiple theme using createTheme() method. There should one default theme export.

import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    primary: {
      main: COLORS.one.primary,
    },
    secondary: {
      main: COLORS.one.secondary,
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});

export default baseTheme;

# 3. other theme can be export also from theme.js

export const Theme1 = createTheme({});
export const Theme2 = createTheme({});

# 4. Make a ThemeContext
'use client';

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";

import { deepmerge } from "@mui/utils";
import baseTheme from "@/theme";


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
    console.log(size, 'fontsize')
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
      <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}
// export function useThemeContext() {
//     return useContext(ThemeContext)
// }


# 5. wrap the ThemeContextProvider in the layout file



# protect routes in nextjs
# 1. 
npm install js-cookie

# 2.
import Cookies from 'js-cookie';

// Set a cookie
Cookies.set('token', 'your_token_here');
Cookies.set('user', JSON.stringify(user_data_here));

# 3.
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const loggedInRoutes = ["/dashboard"];
const loggedOutRoutes = ["/login", "/register"];

export default async function AuthMiddleware(req) {
  if (
    !loggedInRoutes.some((path) => req.nextUrl.pathname.startsWith(path)) &&
    !loggedOutRoutes.some((path) => req.nextUrl.pathname.startsWith(path))
  ) {
    return NextResponse.next();
  } else {
    const myCookie = cookies();
    let token = null;
    if (myCookie.get("token")) {
      token = myCookie.get("token").value;
    }
    if (
      !token &&
      loggedInRoutes.some((path) => req.nextUrl.pathname.startsWith(path))
    ) {
      return NextResponse.redirect("/login");
    } else if (
      token &&
      loggedOutRoutes.some((path) => req.nextUrl.pathname.startsWith(path))
    ) {
      return NextResponse.redirect("/dashboard");
    }
  }
  return NextResponse.next();
}

or
`
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
`