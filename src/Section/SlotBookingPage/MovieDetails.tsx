import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

interface Movie {
  id: string;
  movie_poster: string;
  title: string;
  genre: string;
  duration: string;
  director: string;
  rating: string;
}

interface MovieProps {
  movie: Movie;
  loading: boolean;
}

const MovieDetails: React.FC<MovieProps> = ({ movie, loading }) => {
  const movieDetails = [
    { label: "Genre", value: movie?.genre },
    { label: "Duration", value: movie?.duration },
    { label: "Director", value: movie?.director },
    { label: "Rating", value: movie?.rating },
  ];

  console.log(loading);
  return (
    <Card sx={{ borderRadius: "10px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="364px"
          animation="wave"
        />
      ) : (
        <CardMedia
          component="img"
          image={movie.movie_poster}
          alt="movie poster"
          sx={{ objectFit: "cover", width: "100%", height: "364px" }}
        />
      )}
      <CardContent>
        <Typography variant="h3" color="primary" gutterBottom>
          {movie?.title}
        </Typography>
        <TableContainer sx={{ py: "20px" }}>
          <Table sx={{ maxWidth: "350px" }}>
            <TableBody>
              {movieDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ p: 0, py: "11px", borderBottom: "none" }}>
                    <Typography variant="body1" fontWeight="bold">
                      {detail?.label}
                    </Typography>
                  </TableCell>
                  <TableCell
                    sx={{ p: 0, py: "11px", borderBottom: "none" }}
                    colSpan={2}
                  >
                    <Typography variant="body1">{detail?.value}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default MovieDetails;
