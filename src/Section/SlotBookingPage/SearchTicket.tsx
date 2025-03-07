import { Search } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { CGV, Cinemapolis, XXI } from "../../assets";
import MenuItemSelect from "../../components/MenuItem";

const Studio = [
  { label: "XXI", value: <img src={XXI} alt="logo1" width={35} /> },
  { label: "2D", value: "2D" },
  { label: "CGV", value: <img src={CGV} alt="logo2" width={35} /> },
  { label: "Gold Class 2D", value: "Gold Class 2D" },
  { label: "Velvet 2D", value: "Velvet 2D" },
  {
    label: "Cinemapolis",
    value: <img src={Cinemapolis} alt="logo3" width={75} />,
  },
  { label: "Regular 2D", value: "Regular 2D" },
];

const Sort = [
  { label: "Nearest", value: "Nearest" },
  { label: "Cheapest Price", value: "Cheapest Price" },
  { label: "Alphabet", value: "Alphabet" },
];
const Cinema = [
  { label: "XXI", value: <img src={XXI} alt="logo1" width={35} /> },
  { label: "CGV", value: <img src={CGV} alt="logo2" width={35} /> },
  {
    label: "Cinemapolis",
    value: <img src={Cinemapolis} alt="logo3" width={75} />,
  },
];
const SearchTicket: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Grid container columnSpacing={1} py="32px">
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 1 }}>
            <TextField
              variant="outlined"
              color="primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
              size="small"
              placeholder="Search Post"
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
            <MenuItemSelect record={Cinema} fontSize="14px" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default SearchTicket;
