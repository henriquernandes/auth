import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LoginPageContext as Context } from "../context/LoginPageContext";
import { useState } from "react";

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const { signUp, changePage } = useContext(Context);
  const [loginData, setLoginData] = useState({
    email: "manager@company.com",
    password: "Manager",
  });

  const handleChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid container component="form" sx={{ mt: 1 }} xs={8}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h3" align="left">
            Welcome
          </Typography>
          <Typography variant="subtitle1" align="left">
            Sign in to continue to Company Name
          </Typography>
        </Grid>
        <TextField
          type="email"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          onChange={handleChange}
          value={loginData.email}
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          onChange={handleChange}
          value={loginData.password}
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Grid
          item
          xs={12}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          my={1}
        >
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link href="#" variant="body1">
            Forgot password?
          </Link>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          sx={{ p: 1 }}
          onClick={() => login(loginData)}
        >
          Sign In
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 3, p: 1 }}
          onClick={() => login(loginData)}
        >
          <GoogleIcon />
          <Typography ml={2} variant="body2" align="left">
            Sign in with Google
          </Typography>
        </Button>
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="body2" align="right">
            {"Don't have an account? "}
            <Link
              href="#"
              onClick={() => changePage(signUp)}
              variant="body2"
              underline="hover"
            >
              {"Sign Up"}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
