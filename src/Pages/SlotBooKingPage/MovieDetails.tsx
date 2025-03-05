import {
  Card,
  CardContent,
  CardMedia,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import image1 from "../../assets/Images/CarsoualImage/spiderman.svg";

interface MovieDES {
  label: string;
  value: string;
}

const MovieDES: MovieDES[] = [
  {
    label: "Genre",
    value: "Action",
  },
  {
    label: "Duration",
    value: "2 hours 28 min",
  },
  {
    label: "Director",
    value: "Jon Watts",
  },
  {
    label: "Rating",
    value: "SU",
  },
];

const MovieDetails: React.FC = () => {
  return (
    <Card sx={{ borderRadius: "10px" }}>
      <CardMedia
        component="img"
        image={image1}
        alt="image"
        height="364px"
        sx={{ objectFit: "cover" }}
      ></CardMedia>
      <CardContent>
        <Typography variant="h3" color="primary">
          SPIDERMAN : NO WAY HOME
          <TableContainer sx={{ py: "20px" }}>
            <Table sx={{ maxWidth: "250px" }}>
              <TableBody>
                {MovieDES.map((movie, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ p: 0, py: "11px", borderBottom: "none" }}>
                      <Typography>{movie.label}</Typography>
                    </TableCell>
                    <TableCell sx={{ p: 0, py: "11px", borderBottom: "none" }}>
                      <Typography>{movie.value}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default MovieDetails;
