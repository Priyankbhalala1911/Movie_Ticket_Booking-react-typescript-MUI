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

  const [error, setError] = useState<{ field: string; message: string }[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setRegisterUser({ ...registerUser, [name]: value });
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const errors: { field: string; message: string }[] = [];

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (registerUser.name.trim() === "") {
      errors.push({ field: "name", message: "Name is Required!" });
    }

    if (registerUser.email.trim() === "") {
      errors.push({ field: "email", message: "Email is Required!" });
    } else if (!emailPattern.test(registerUser.email)) {
      errors.push({ field: "email", message: "Invalid email format!" });
    }

    if (errors.length > 0) {
      setError(errors);
      return;
    } else {
      navigate("/account/registration-2", {
        state: { name: registerUser.name, email: registerUser.email },
      });
      setDirection(1);
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
              Full Name
            </Typography>
            <TextField
              type="text"
              placeholder="Enter Full Name"
              variant="standard"
              name="name"
              color="primary"
              value={registerUser.name}
              onChange={handleChange}
              error={!!error.find((err) => err.field === "name")}
              helperText={
                error.find((err) => err.field === "name")?.message || ""
              }
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
              type="email"
              placeholder="Enter Email Address"
              variant="standard"
              name="email"
              color="primary"
              value={registerUser.email}
              onChange={handleChange}
              error={!!error.find((err) => err.field === "email")}
              helperText={
                error.find((err) => err.field === "email")?.message || ""
              }
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
              Continue Register...
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
