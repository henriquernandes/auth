import * as React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import ApiIcon from "@mui/icons-material/Api";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { FaLaravel, FaPlus, FaReact } from "react-icons/fa";
import { cyan, grey, red } from "@mui/material/colors";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import {
  LoginPageContext as Context,
  LoginPageProvider,
} from "../context/LoginPageContext";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";

export default function LoginPage() {
  const { signUp } = useContext(Context);
  const { login, isLoading } = useContext(AuthContext);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        component={Paper}
        elevation={6}
        sx={{ display: "flex" }}
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Box xs={12} alignSelf={"start"}>
          <Typography
            sx={{ display: "flex", fontWeight: 500 }}
            alignItems="center"
            component="h1"
            variant="h5"
            textAlign="left"
          >
            <ApiIcon sx={{ fontSize: 32, m: 1 }} />
            Company Name
          </Typography>
        </Box>
        {!signUp ? <LoginForm /> : <SignUpForm />}
        <Box xs={12} alignSelf={"start"}>
          <Typography
            sx={{ display: "flex" }}
            alignItems="center"
            textAlign="left"
            typography={"subtitle1"}
          >
            <CopyrightIcon sx={{ fontSize: 16, mx: 0.5 }} />
            Company copyright 2022
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        sm={6}
        md={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={2}
        sx={{
          display: { xs: "none", md: "flex" },
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[900]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container justifyContent="center" flexDirection="column" gap={3}>
          <Grid
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <FaReact size={72} color={cyan["A200"]} />
            <FaPlus size={40} color={grey[100]} />
            <FaLaravel size={72} color={red[500]} />
          </Grid>
          <Typography variant="h5" align="center" color={grey[50]}>
            React + Laravel JWT Auth ready to use with MUI styles!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
