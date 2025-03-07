import {
  Card,
  CardContent,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

interface Movie {
  id: number;
  image: string;
  title: string;
  genre: string;
  duration: string;
  director: string;
  rating: string;
}
interface MovieProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieProps> = ({ movie }) => {
  const movieDetails = [
    { label: "Genre", value: movie.genre },
    { label: "Duration", value: movie.duration },
    { label: "Director", value: movie.director },
    { label: "Rating", value: movie.rating },
  ];
  return (
    <Card sx={{ borderRadius: "10px" }}>
      <CardMedia
        component="img"
        image={movie.image}
        alt="image"
        sx={{ objectFit: "cover", width: "100%", height: "364px" }}
      ></CardMedia>
      <CardContent>
        <Typography variant="h3" color="primary">
          {movie.title}
          <TableContainer sx={{ py: "20px" }}>
            <Table sx={{ maxWidth: "350px" }}>
              <TableBody>
                {movieDetails.map((movie, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ p: 0, py: "11px", borderBottom: "none" }}>
                      <Typography>{movie.label}</Typography>
                    </TableCell>
                    <TableCell
                      sx={{ p: 0, py: "11px", borderBottom: "none" }}
                      colSpan={2}
                    >
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
