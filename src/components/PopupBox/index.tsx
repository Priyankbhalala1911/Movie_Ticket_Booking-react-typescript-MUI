import { Close } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

interface PopupBoxProps {
  open: boolean;
  onClose: () => void;
}
const PopUpBox: React.FC<PopupBoxProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>Want to go back?</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <Close />
      </IconButton>
      <DialogContent>
        <DialogContentText>
          The seat you previously selected will be cancelled and you will have
          to re-select.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" onClick={onClose}>
          Return
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/choose-seat");
            window.scrollTo(0, 0);
          }}
        >
          <Typography color="warning">Cancelled</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PopUpBox;
