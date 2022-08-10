import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { FaClock, FaEnvelope, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { logout, userInfo } = useContext(AuthContext);
  return (
    <Grid
      container
      component="main"
      xs={12}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        backgroundColor: (t) =>
          t.palette.mode === "light"
            ? t.palette.grey[900]
            : t.palette.grey[900],
        backgroundSize: "cover",
      }}
    >
      <Grid
        item
        fullWidth
        xs={4}
        justifyContent="center"
        component={Paper}
        elevation={12}
      >
        <Card>
          <CardHeader title="Dashboard" />
          <CardContent sx={{ fontSize: 20 }}>
            <Grid item xs={12} flexDirection="row" display="flex" m={2}>
              <FaUser />
              <Typography variant="body1" component="p" display="flex" mx={2}>
                {userInfo.name}
              </Typography>
            </Grid>
            <Grid item xs={12} flexDirection="row" display="flex" m={2}>
              <FaEnvelope />
              <Typography variant="body1" component="p" display="flex" mx={2}>
                {userInfo.email}
              </Typography>
            </Grid>
            <Grid item xs={12} flexDirection="row" display="flex" m={2}>
              <FaClock />
              <Typography variant="body1" component="p" display="flex" mx={2}>
                {new Date(userInfo.created_at).toLocaleDateString()}
              </Typography>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="large" onClick={logout}>
              Logout
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Dashboard;
