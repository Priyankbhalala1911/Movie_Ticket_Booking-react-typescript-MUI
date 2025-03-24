/* eslint-disable @typescript-eslint/no-explicit-any */
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
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const RegistrationForm2: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<{ field: string; message: string }[]>([]);

  const location = useLocation();
  const register = location.state || {};
  console.log(register);

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setError([]);

    if (password !== confirmPassword) {
      setError([
        { field: "confirmPassword", message: "Passwords do not match" },
      ]);
      return;
    }

    if (register.name && register.email) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API_BASE_URL}/register`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: register.name,
              email: register.email,
              password: password,
            }),
          }
        );

        const data = await response.json();
        console.log(data);

        if (!response.ok) {
          if (data.errors) {
            setError(data.errors);
            data.errors.forEach((err: { message: string }) =>
              toast.error(err.message)
            );
          } else {
            toast.error(data.message || "Something went wrong!");
          }
        } else {
          toast.success(data.message);
          navigate("/account/login");
        }
      } catch (err: any) {
        console.log(err);
        toast.error("Network error! Please try again.");
      }
    } else {
      toast.error("Email or Name is missing.");
    }
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!error.find((err) => err.field === "password")}
              helperText={
                error.find((err) => err.field === "password")?.message || ""
              }
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
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!error.find((err) => err.field === "confirmPassword")}
              helperText={
                error.find((err) => err.field === "confirmPassword")?.message ||
                ""
              }
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
            onClick={handleSubmit}
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
