import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

interface PageProps {
  setDirection: (dir: number) => void;
}

interface IState {
  name: string;
  email: string;
}
const RegistrationForm1: React.FC<PageProps> = ({ setDirection }) => {
  const navigate = useNavigate();

  const [registerUser, setRegisterUser] = useState<IState>({
    name: "",
    email: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("registerUser:", registerUser);
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
      onSubmit={handleSubmit}
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
              FUll Name
            </Typography>
            <TextField
              type="text"
              placeholder="Enter Full Name"
              variant="standard"
              name="name"
              color="primary"
              value={registerUser.name}
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
              Email Address
            </Typography>
            <TextField
              type="text"
              placeholder="Enter Email Address"
              variant="standard"
              name="email"
              color="primary"
              value={registerUser.email}
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
            onClick={() => {
              navigate("/account/registration-2");
              setDirection(1);
            }}
            type="submit"
          >
            <Typography variant="h5" textTransform="capitalize">
              Register Now
            </Typography>
          </Button>
          <Typography variant="body1" color="primary" pt={"90px"}>
            2021 TIX ID - PT.
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
export default RegistrationForm1;
