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
import Registration2 from "../../assets/Images/CreateAccount/registration2.svg";
interface PageProps {
  setDirection: (dir: number) => void;
}

interface IState {
  id: number;
  phoneNumber: string;
  password: string;
}
const RegistrationPage2: React.FC<PageProps> = ({ setDirection }) => {
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
    <Box
      sx={{
        backgroundImage: `url(${Registration2})`,
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
              navigate("/account/registration");
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
      </Container>
    </Box>
  );
};
export default RegistrationPage2;
