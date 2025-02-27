import { KeyboardBackspace } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import Registration from "../../assets/Images/CreateAccount/registartion.svg";

interface PageProps {
  setDirection: (dir: number) => void;
}

interface IState {
  name: string;
  phoneNumber: string;
}
const RegistrationPage: React.FC<PageProps> = ({ setDirection }) => {
  const navigate = useNavigate();

  const [registerUser, setRegisterUser] = useState<IState>({
    name: "",
    phoneNumber: "",
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
    <Box
      sx={{
        backgroundImage: `url(${Registration})`,
        width: "100%",
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
            onClick={() => {
              navigate("/account/login");
              setDirection(-1);
            }}
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
                  Mobile Number
                </Typography>
                <TextField
                  type="text"
                  placeholder="Enter Mobile Number"
                  variant="standard"
                  name="phoneNumber"
                  color="primary"
                  value={registerUser.phoneNumber}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
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
              <Typography variant="body1" color="primary" pt={"100px"}>
                2021 TIX ID - PT.
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Container>
    </Box>
  );
};
export default RegistrationPage;
