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
import { loginSuccess } from "../Store/Slices/AuthSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import toast from "react-hot-toast";

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API_BASE_URL}/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginUser),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message);
      } else {
        dispatch(loginSuccess({ token: data.token, name: data.name }));
        toast.success(data.message);
        const from = location.state?.from || "/";
        navigate(from, { replace: true });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.log("Login failed", err);
    }
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
              onClick={handleSubmit}
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
