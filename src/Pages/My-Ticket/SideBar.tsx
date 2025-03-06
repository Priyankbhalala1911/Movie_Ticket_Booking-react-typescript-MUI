import {
  ConfirmationNumber,
  EventNote,
  KeyboardBackspace,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const navigationMenu = [
  {
    title: "ACTIVE TICKET",
    link: "active-ticket",
    icon: <ConfirmationNumber />,
  },
  {
    title: "TRANSACTION LIST",
    link: "transaction-list",
    icon: <EventNote />,
  },
];

const SideBar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => setMobileOpen(!mobileOpen);

  const sidebarContent = (
    <Box
      sx={{
        py: "38px",
        px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
        width: { lg: "350px", md: "300px", xs: "250px" },
        bgcolor: "rgba(109, 107, 107, 0.1)",
      }}
    >
      <List sx={{ height: "100vh" }}>
        {navigationMenu.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.link}
              disableTouchRipple
              onClick={() => setMobileOpen(false)}
              sx={{
                borderRadius: "5px",
                px: 0,
                transition: "background-color 0.3s",
                "&:hover": { background: "none" },
                "&.active": { color: "info.main" },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "primary.main",
                  fontSize: { xs: "12px" },
                  ".active &": { color: "info.main" },
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.title}
                sx={{
                  color: "primary.main",
                  fontSize: { xs: "12px" },
                  "& .MuiTypography-root": { fontWeight: "bold" },
                  ".active &": { color: "info.main" },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            disableRipple
            onClick={toggleDrawer}
            sx={{ position: "absolute", top: "70px", left: "12px", px: 0 }}
          >
            <KeyboardBackspace color="primary" />
          </IconButton>
          <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
            {sidebarContent}
          </Drawer>
        </>
      ) : (
        sidebarContent
      )}
    </>
  );
};

export default SideBar;
