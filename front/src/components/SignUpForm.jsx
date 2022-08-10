import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { LoginPageContext as Context } from "../context/LoginPageContext";

export default function SignUpForm() {
  const { login } = useContext(AuthContext);
  const { signUp, changePage } = useContext(Context);
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
      <Grid
        container
        component="form"
        noValidate
        onSubmit={() => "a"}
        sx={{ mt: 1 }}
        xs={8}
      >
        <Grid item xs={12}>
          <Typography component="h1" variant="h3" align="left">
            Signup
          </Typography>
          <Typography variant="subtitle1" align="left">
            Sign up to continue to Company Name
          </Typography>
        </Grid>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="confirm_email"
          label="Confirm Email Address"
          name="confirm_email"
          autoComplete="confirm_email"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirm_password"
          label="Confirm Password"
          type="confirm_password"
          id="confirm_password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ p: 1, mt: 1 }}
          onClick={login}
        >
          Create account
        </Button>
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ p: 1, mt: 1 }}
        >
          <Typography variant="body2" align="right">
            {"Already have an account? "}
            <Link
              href="#"
              onClick={() => changePage(signUp)}
              variant="body2"
              underline="hover"
            >
              {"Login"}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
