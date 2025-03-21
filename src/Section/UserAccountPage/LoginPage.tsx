import { Box, Button, Container } from "@mui/material";
import React from "react";
import { KeyboardBackspace } from "@mui/icons-material";
import { Login } from "../../assets";
import { useNavigate } from "react-router";
import LoginForm from "../../Forms/LoginForm";

interface PageProps {
  setDirection: (dir: number) => void;
}

const LoginPage: React.FC<PageProps> = ({ setDirection }) => {
  const navigate = useNavigate();

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
        <LoginForm setDirection={setDirection} />
      </Container>
    </Box>
  );
};
export default LoginPage;
