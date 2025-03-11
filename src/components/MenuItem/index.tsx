import { ArrowDropDown, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { ReactNode, useState } from "react";
import { useDispatch } from "react-redux";
import { UpdatedFilter } from "../../Store/Slices/FilterSlice";

interface MenuItemSelectProps {
  record: { label: string; value: string | ReactNode }[];
  startIcon?: ReactNode;
  fontSize?: string;
  searchField?: boolean;
  filterKey?: "location" | "brand" | "news";
}

const MenuItemSelect: React.FC<MenuItemSelectProps> = ({
  record,
  startIcon,
  fontSize,
  searchField,
  filterKey,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRecord, setSelectedRecord] = useState(record[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearchTerm("");
  };

  const handleSelectRecord = (record: {
    label: string;
    value: string | ReactNode;
  }) => {
    setSelectedRecord(record);

    if (typeof record.label === "string") {
      dispatch(UpdatedFilter({ key: filterKey, value: record.label }));
    }

    handleClose();
  };

  const filteredRecord = record.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Button
        onClick={handleOpen}
        variant="text"
        color="primary"
        startIcon={startIcon}
        endIcon={<ArrowDropDown />}
        disableTouchRipple
        sx={{
          fontWeight: "bold",
          textTransform: "none",
          fontSize: fontSize,
          bgcolor: "transparent",
        }}
      >
        {typeof selectedRecord.value === "string"
          ? selectedRecord.value
          : selectedRecord.label}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{ sx: { width: "300px", p: 1 } }}
      >
        <Box sx={{ p: 1 }}>
          {searchField && (
            <TextField
              variant="outlined"
              color="primary"
              fullWidth
              size="small"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
          )}
        </Box>

        {filteredRecord.length > 0 ? (
          filteredRecord.map((item, index) => (
            <MenuItem key={index} onClick={() => handleSelectRecord(item)}>
              {typeof item.value === "string" ? (
                <Typography>{item.value}</Typography>
              ) : (
                item.value
              )}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>
            <Typography color="gray">No results found</Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default MenuItemSelect;
