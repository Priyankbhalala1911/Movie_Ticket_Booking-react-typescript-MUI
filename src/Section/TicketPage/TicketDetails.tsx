import {
  Box,
  Divider,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { customColors } from "../../Theme";
import { FileDownloadOutlined } from "@mui/icons-material";
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

interface TicketDetailsProps {
  data: {
    id: string;
    password_key: string;
    seat_number: string[];
    movie_title: string;
    location: string;
    show_date: string;
    show_type: string;
    show_time: string;
  };
}

const TicketDetails: React.FC<TicketDetailsProps> = ({ data }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const movieDetails = [
    { label: "Code Booking ", value: data?.id },
    { label: "Password Key ", value: data?.password_key },
    { label: "Chair", value: data?.seat_number.join(", ") },
  ];

  const handelDowanload = async () => {
    if (!contentRef.current) return;

    const canva = await html2canvas(contentRef.current, { useCORS: true });
    const imageData = canva.toDataURL("image/png");

    const pdfWidth = 595.28;
    const pdfHeight = 841.89;

    const imgWidth = canva.width;
    const imgHeight = canva.height;

    const scale = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight) * 0.9;

    const finalWidth = imgWidth * scale;
    const finalHeight = imgHeight * scale;

    const marginX = (pdfWidth - finalWidth) / 2;
    const marginY = (pdfHeight - finalHeight) / 2;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    pdf.addImage(imageData, "PNG", marginX, marginY, finalWidth, finalHeight);
    pdf.save(`${new Date().getTime()}.pdf`);
  };

  return (
    <Box position="relative" ref={contentRef}>
      <Box
        bgcolor="primary.main"
        sx={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          p: { xs: "24px", sm: "32px", md: "40px" },
        }}
      >
        <Typography
          variant={isMobile ? "h5" : "h4"}
          color={customColors.pastelYellow}
          pb="20px"
        >
          {data?.movie_title}
        </Typography>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={5}>
            <Typography variant="h6" color="#9DA8BE">
              Location
            </Typography>
            <Typography variant="h5" color="white">
              {data?.location}
            </Typography>
            <Grid container sx={{ mt: 2 }}>
              <Grid item xs={10}>
                <Typography variant="h6" color="#9DA8BE">
                  Date
                </Typography>
                <Typography variant="h5" color="white">
                  {data?.show_date}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          {!isMobile && (
            <Grid
              item
              xs={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Divider
                orientation="vertical"
                flexItem
                sx={{ bgcolor: "#9DA8BE", width: "1px", height: "136px" }}
              />
            </Grid>
          )}

          <Grid item xs={12} sm={5}>
            <Typography variant="h6" color="#9DA8BE">
              Class
            </Typography>
            <Typography variant="h5" color="white">
              {data?.show_type}
            </Typography>

            <Typography variant="h6" color="#9DA8BE" sx={{ mt: 2 }}>
              Time
            </Typography>
            <Typography variant="h5" color="white">
              {data?.show_time}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        bgcolor={customColors.pastelYellow}
        position="relative"
        sx={{
          p: { xs: "24px", sm: "32px", md: "40px" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: { xs: "24px", sm: "50px" },
        }}
      >
        <TableContainer sx={{ py: "10px" }}>
          <Table sx={{ maxWidth: "500px" }}>
            <TableBody>
              {movieDetails.map((movie, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ p: 0, py: "11px", borderBottom: "none" }}>
                    <Typography variant="h6" color="primary">
                      {movie.label}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ p: 0, py: "11px", borderBottom: "none" }}>
                    <Typography variant="h6" color="primary">
                      {movie.value}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          width="80px"
          height="80px"
          border="3px solid black"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <IconButton
            disableTouchRipple
            sx={{ "&:hover": { background: "none" } }}
            onClick={handelDowanload}
          >
            <FileDownloadOutlined sx={{ fontSize: "60px", color: "black" }} />
          </IconButton>
        </Box>
      </Box>
      <Box
        display="flex"
        gap={{ sm: "12px", xs: "7px" }}
        justifyContent="center"
        position="absolute"
        bottom={{ sm: -15, xs: -5 }}
        left="50%"
        sx={{ transform: "translateX(-50%)" }}
      >
        {[...Array(17)].map((_, index) => (
          <Box
            key={index}
            width={{ lg: "25px", sm: "22px", xs: "12px" }}
            height={{ lg: "25px", sm: "22px", xs: "12px" }}
            bgcolor="white"
            borderRadius="50%"
          />
        ))}
      </Box>
    </Box>
  );
};
export default TicketDetails;
