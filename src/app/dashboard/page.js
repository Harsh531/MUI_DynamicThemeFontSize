"use client";

import { Button } from "@mui/material";
import Cookies from "js-cookie";

function DashboardPage() {
  const handleLogin = () => {
    // Set a cookie
    Cookies.set("token", "your_token_here");
    Cookies.set("user", JSON.stringify("data"));
  };
  return (
    <div>
      <Button onClick={handleLogin}>set cookie</Button>
    </div>
  );
}

export default DashboardPage;
