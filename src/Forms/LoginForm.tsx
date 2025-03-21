import {
  Button,
  Card,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { login } from "../Store/Slices/AuthSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PageProps {
  setDirection: (dir: number) => void;
}
interface IState {
  email: string;
  password: string;
}

const LoginForm: React.FC<PageProps> = ({ setDirection }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginUser, setLoginUser] = useState<IState>({
    email: "",
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
    dispatch(login({ email: loginUser.email, password: loginUser.password }));
    const from = location.state?.from || "/";
    navigate(from, { replace: true });
  };
  return (
    <>
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
                Email Address
              </Typography>
              <TextField
                type="text"
                placeholder="Enter Email Address"
                variant="standard"
                name="email"
                color="primary"
                value={loginUser.email}
                onChange={handleChange}
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
            <Typography variant="subtitle2" color="primary" textAlign="center">
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
    </>
  );
};
export default LoginForm;
