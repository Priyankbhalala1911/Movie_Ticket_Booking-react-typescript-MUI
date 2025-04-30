import { Search } from "@mui/icons-material";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import { CGV, Cinemapolis, INOX, PVR } from "../../assets";
import MenuItemSelect from "../../components/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { UpdatedCinema } from "../../Store/Slices/FilterSlice";
import { RootState } from "../../Store";

interface Screen {
  type: string;
}

interface Theatre {
  chain: string;
  screens: Screen[];
}

interface TheaterProps {
  theatres: Theatre[];
}

const CinemaLogo = {
  INOX: <img src={INOX} alt="logo1" width={35} />,
  PVR: <img src={PVR} alt="logo2" width={35} />,
  CGV: <img src={CGV} alt="logo3" width={35} />,
  Cinepolis: <img src={Cinemapolis} alt="logo4" width={75} />,
};

const SearchTicket: React.FC<TheaterProps> = ({ theatres = [] }) => {
  const searchTerm = useSelector(
    (state: RootState) => state.filterTheater.cinema
  );
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(UpdatedCinema(event.target.value));
  };

  const alltypeObject = [
    { label: "", value: "Type" },
    ...Array.from(
      new Set(
        theatres.flatMap((theater) =>
          theater.screens.flatMap((screen) => screen.type)
        )
      )
    ).map((type) => ({ label: type, value: type })),
  ];

  const allCinemaObject = [
    { label: "", value: "Cinema" },
    ...Array.from(
      new Set(
        theatres.flatMap((theater) => ({
          label: theater.chain,
          value: CinemaLogo[theater.chain as keyof typeof CinemaLogo],
        }))
      )
    ),
  ];
  const allChains = new Set(theatres.flatMap((theater) => theater.chain));

  console.log(Array.from(allChains));

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
            <MenuItemSelect
              record={alltypeObject}
              fontSize="14px"
              filterKey="type"
            />
          </Grid>

          <Grid item xs={6} textAlign="center">
            <MenuItemSelect
              record={allCinemaObject}
              fontSize="14px"
              filterKey="brand"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default SearchTicket;
