import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

interface IState {
  id: number;
  phoneNumber: string;
  password: string;
}

const RegistrationForm2: React.FC = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState<IState>({
    id: 0,
    phoneNumber: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setLoginUser({ ...loginUser, [name]: value });
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
              Email Address
            </Typography>
            <TextField
              type="text"
              placeholder="Enter Email Address"
              variant="standard"
              name="phoneNumber"
              color="primary"
              value={loginUser.phoneNumber}
              onChange={handleChange}
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
