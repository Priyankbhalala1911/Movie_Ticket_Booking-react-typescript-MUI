import { Category, Search } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import MenuItemSelect from "../../components/MenuItem";
import FilterNews from "../../Section/TIXIDNewsPage/FilterNews";
import MovieNews from "../../Section/TIXIDNewsPage/MovieNews";
import { useDispatch, useSelector } from "react-redux";
import { UpdatedPostName } from "../../Store/Slices/FilterSlice";
import { RootState } from "../../Store";

interface Category {
  label: string;
  value: string;
}
const record: Category[] = [
  { label: "Spotlight", value: "Spotlight" },
  { label: "News", value: "News" },
];

const TIXIDNews: React.FC = () => {
  const postName = useSelector(
    (state: RootState) => state.filterTheater.postName
  );
  const dispatch = useDispatch();
  return (
    <>
      <Container
        sx={{
          px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
          mt: "50px",
          mb: "160px",
        }}
        maxWidth="xl"
      >
        <Box>
          <Typography variant="h1" color="primary" sx={{ pb: "18px" }}>
            TIX ID News
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" color="primary">
            The latest news about the world of cinema for you!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            pt: "31px",
          }}
        >
          <Box
            sx={{
              width: "576px",
              border: "1px solid #BDC5D4",
              borderRadius: "6px",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              p: "8px 12px",
            }}
          >
            <TextField
              variant="standard"
              placeholder="Search Post"
              value={postName}
              onChange={(e) => dispatch(UpdatedPostName(e.target.value))}
              fullWidth
              sx={{
                "& .MuiInputBase-input": {
                  color: "#1A2C50",
                },
                "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                  display: "none",
                },
              }}
            ></TextField>
            <IconButton sx={{ p: 0 }}>
              <Search color="primary" />
            </IconButton>
          </Box>
          <MenuItemSelect record={record} fontSize="14px" filterKey="news" />
        </Box>

        <Box pt="68px" display="flex" flexDirection="column" gap="80px">
          <FilterNews />
          <MovieNews />
        </Box>
      </Container>
    </>
  );
};
export default TIXIDNews;
