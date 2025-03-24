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

interface PopupBoxProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  action1: string;
  action2: string;
  click_action1: () => void;
}
const PopUpBox: React.FC<PopupBoxProps> = ({
  open,
  onClose,
  title,
  content,
  action1,
  action2,
  click_action1,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>{title}</DialogTitle>
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
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" onClick={onClose}>
          {action1}
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            click_action1();
            onClose();
            window.scrollTo(0, 0);
          }}
        >
          <Typography color="warning">{action2}</Typography>
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PopUpBox;
