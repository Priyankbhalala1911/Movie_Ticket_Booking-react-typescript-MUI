import { Visibility, VisibilityOff } from "@mui/icons-material";
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
import { useNavigate } from "react-router";

interface IState {
  password: string;
}

const RegistrationForm2: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [registerUser, setRegisterUser] = useState<IState>({
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };
  return (
    <Card
      elevation={3}
      sx={{
        maxWidth: "740px",
        width: "100%",
        background: "white",
        justifySelf: "center",
        p: { lg: "60px", md: "50px", sm: "40px", xs: "30px" },
      }}
      component="form"
    >
      <Stack gap={"64px"}>
        <Typography variant="h1" color="primary">
          TIX ID Register
        </Typography>
        <Stack gap="40px">
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
              value={registerUser.password}
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
          <Stack gap="9px">
            <Typography
              variant="subtitle1"
              color="primary"
              textTransform="uppercase"
            >
              Confirm Password
            </Typography>
            <TextField
              type={showPassword ? "text" : "password"}
              placeholder="Enter Confirm Password"
              variant="standard"
              name="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              color="primary"
              fullWidth
            />
          </Stack>
        </Stack>
        <Stack gap="20px">
          <Button
            variant="contained"
            color="primary"
            sx={{ py: "12px" }}
            onClick={() => navigate("/")}
          >
            <Typography variant="h5" textTransform="capitalize">
              Register Now
            </Typography>
          </Button>
          <Typography variant="body1" color="primary" pt={"140px"}>
            2021 TIX ID - PT.
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
export default RegistrationForm2;
