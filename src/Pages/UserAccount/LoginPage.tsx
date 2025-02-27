import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Login from "../../assets/Images/CreateAccount/login.svg";
import {
  KeyboardBackspace,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { useNavigate } from "react-router";

interface PageProps {
  setDirection: (dir: number) => void;
}
interface IState {
  phoneNumber: string;
  password: string;
}

const LoginPage: React.FC<PageProps> = ({ setDirection }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginUser, setLoginUser] = useState<IState>({
    phoneNumber: "",
    password: "",
  });
  // const [disable, setDisable] = useState<boolean>(true);
  // const [error, serError] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("loginUser:", loginUser);
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${Login})`,
        width: "100vw",
        minHeight: "100vh",
        height: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
          py: "34px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Button
            variant="text"
            sx={{
              color: "#FFFFFF",
              fontSize: "20px",
              textTransform: "capitalize",
            }}
            startIcon={<KeyboardBackspace />}
            onClick={() => navigate("/")}
          >
            Return
          </Button>
        </Box>
        <Card
          elevation={3}
          sx={{
            maxWidth: "740px",
            width: "100%",
            background: "white",
            p: { lg: "60px", md: "50px", sm: "40px", xs: "30px" },
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          <Stack gap={"64px"}>
            <Typography variant="h1" color="primary">
              Login to TIX ID
            </Typography>
            <Stack gap="40px">
              <Stack gap="9px">
                <Typography
                  variant="subtitle1"
                  color="primary"
                  textTransform="uppercase"
                >
                  Mobile Number
                </Typography>
                <TextField
                  type="text"
                  placeholder="Enter Mobile Number"
                  variant="standard"
                  name="phoneNumber"
                  color="primary"
                  value={loginUser.phoneNumber}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </Stack>
              <Stack gap="9px">
                <Typography
                  variant="subtitle1"
                  color="primary"
                  textTransform="uppercase"
                >
                  Password
                </Typography>
                <TextField
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter a Password"
                  variant="standard"
                  name="password"
                  value={loginUser.password}
                  onChange={handleChange}
                  color="primary"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="start"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Stack>
            <Stack gap="20px">
              <Button
                variant="contained"
                color="primary"
                sx={{ py: "12px" }}
                type="submit"
              >
                <Typography variant="h5" textTransform="capitalize">
                  Sign In Now
                </Typography>
              </Button>
              <Typography
                variant="subtitle2"
                color="primary"
                textAlign="center"
              >
                Don't have an account yet?
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                sx={{ py: "12px" }}
                onClick={() => {
                  setDirection(1);
                  navigate("/account/registration");
                }}
              >
                <Typography variant="h5" textTransform="capitalize">
                  Register Now
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};
export default LoginPage;
