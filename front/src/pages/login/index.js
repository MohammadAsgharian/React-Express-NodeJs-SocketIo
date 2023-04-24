/*eslint no-unused-expressions: "error"*/
import { useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { setMyLocation } from "../map/mapSlice";

import { useNavigate } from "react-router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"; // Icon
import { useSelector } from "react-redux";
import { getRandomPosition } from "../../data/positions";
import { connectSocket } from "../../utils/connectSocket";
import {
  setMyLocationHandler,
  loginAction,
} from "../../store/actions/loginActions";

export default function Login() {
  const navigate = useNavigate();
  const myLocation = useSelector((state) => state.map.myLocation);

  const getPosition = (position) => {
    console.log(position);
    setMyLocationHandler(position);
  };

  useEffect(() => {
    getPosition(getRandomPosition());
  }, []);

  useEffect(() => {
    if (myLocation) {
      connectSocket();
    }
  }, [myLocation]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    loginAction({
      username: data.get("username"),
      coords: {
        lng: myLocation.lng,
        lat: myLocation.lat,
      },
    });
    navigate("/map");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="UserName"
            name="username"
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
