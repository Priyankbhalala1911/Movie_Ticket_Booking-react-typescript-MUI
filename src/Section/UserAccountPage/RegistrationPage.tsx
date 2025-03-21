import { KeyboardBackspace } from "@mui/icons-material";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";
import { Registration1 } from "../../assets";
import RegistrationForm1 from "../../Forms/RegistrationForm1";

interface PageProps {
  setDirection: (dir: number) => void;
}

const RegistrationPage: React.FC<PageProps> = ({ setDirection }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${Registration1})`,
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
        <RegistrationForm1 setDirection={setDirection} />
      </Container>
    </Box>
  );
};
export default RegistrationPage;
