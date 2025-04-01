import { Search } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import { CGV, Cinemapolis, INOX, PVR, XXI } from "../../assets";
import MenuItemSelect from "../../components/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { UpdatedCinema } from "../../Store/Slices/FilterSlice";
import { RootState } from "../../Store";

const Studio = [
  { label: "2D", value: "2D" },
  { label: "Gold Class 2D", value: "Gold Class 2D" },
  { label: "Velvet 2D", value: "Velvet 2D" },
  { label: "Regular 2D", value: "Regular 2D" },
];

const Sort = [
  { label: "Nearest", value: "Nearest" },
  { label: "Cheapest Price", value: "Cheapest Price" },
];
const Cinema = [
  { label: "", value: "Select" },
  { label: "INOX", value: <img src={INOX} alt="logo1" width={35} /> },
  { label: "PVR", value: <img src={PVR} alt="logo2" width={35} /> },
  { label: "CGV", value: <img src={CGV} alt="logo3" width={35} /> },
  {
    label: "Cinepolis",
    value: <img src={Cinemapolis} alt="logo4" width={75} />,
  },
];
const SearchTicket: React.FC = () => {
  const searchTerm = useSelector(
    (state: RootState) => state.filterTheater.cinema
  );
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(UpdatedCinema(event.target.value));
  };

  return (
    <>
      <Grid container columnSpacing={1} py="32px">
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 1 }}>
            <TextField
              variant="outlined"
              color="primary"
              value={searchTerm}
              onChange={handleChange}
              fullWidth
              size="small"
              placeholder="Search Cinema"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="primary">
                      <Search color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>
        <Grid item container xs={12} md={6} alignItems="center">
          <Grid item xs={4} textAlign="center">
            <MenuItemSelect record={Studio} fontSize="14px" />
          </Grid>
          <Grid item xs={4} textAlign="center">
            <MenuItemSelect record={Sort} fontSize="14px" />
          </Grid>
          <Grid item xs={4} textAlign="center">
            <MenuItemSelect record={Cinema} fontSize="14px" filterKey="brand" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default SearchTicket;
