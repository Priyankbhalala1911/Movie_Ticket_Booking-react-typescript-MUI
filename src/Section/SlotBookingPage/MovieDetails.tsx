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
import { useQuery } from "@tanstack/react-query";
import { getMovieApi } from "../../services/movie";

interface MovieDetailsProps {
  id: string;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ id }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["MovieDetails"],
    queryFn: () => getMovieApi(id),
    staleTime: 0,
    gcTime: 0,
    retry: true,
    enabled: !!id,
  });
  const movieDetails = [
    { label: "Genre", value: data?.genre },
    { label: "Duration", value: data?.duration },
    { label: "Director", value: data?.director },
    { label: "Rating", value: data?.rating },
  ];
  return (
    <Card sx={{ borderRadius: "10px" }}>
      {isLoading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="364px"
          animation="wave"
        />
      ) : (
        <CardMedia
          component="img"
          image={data.movie_poster}
          alt="movie poster"
          sx={{ objectFit: "cover", width: "100%", height: "364px" }}
        />
      )}
      <CardContent>
        <Typography variant="h3" color="primary" gutterBottom>
          {data?.title}
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
