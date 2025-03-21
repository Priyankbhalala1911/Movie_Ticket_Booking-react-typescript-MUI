import { KeyboardBackspace } from "@mui/icons-material";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router";
import { Registration2 } from "../../assets";
import RegistrationForm2 from "../../Forms/RegistrationForm2";
interface PageProps {
  setDirection: (dir: number) => void;
}

const RegistrationPage2: React.FC<PageProps> = ({ setDirection }) => {
  const navigate = useNavigate();
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
        <RegistrationForm2 />
      </Container>
    </Box>
  );
};
export default RegistrationPage2;
