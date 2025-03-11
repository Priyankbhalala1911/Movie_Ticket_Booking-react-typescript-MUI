import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  ChevronLeft,
  ConfirmationNumber,
  Home,
  Menu,
  Newspaper,
  NotificationsNone,
} from "@mui/icons-material";
import { useNavigate } from "react-router";

import React, { useState } from "react";
import { NavLink } from "react-router";
import { Logo } from "../../assets";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();

  const navigationMenu = [
    {
      title: "Home",
      link: "/",
      icon: <Home color="warning" />,
    },
    {
      title: "My Ticket",
      link: "/my-ticket",
      icon: <ConfirmationNumber color="warning" />,
    },
    {
      title: "TIX ID News",
      link: "/news",
      icon: <Newspaper color="warning" />,
    },
  ];

  return (
    <>
      <AppBar
        sx={{
          px: { lg: "72px", md: "52px", sm: "32px", xs: "12px" },
          background: "#FFFFFF",
        }}
        elevation={3}
        position="sticky"
      >
        <Toolbar sx={{ px: { xs: 0 } }}>
          <IconButton
            edge="start"
            sx={{
              mr: 1,
              display: { sm: "none", xs: "flex" },
              alignSelf: "center",
              fontSize: "32px",
            }}
            onClick={() => setShowMenu(true)}
          >
            <Menu color="primary" />
          </IconButton>
          <Box
            width={"64px"}
            height={"64px"}
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
            }}
            px="0px"
          >
            <img src={Logo} alt="navbarLogo" width={"64px"} />
          </Box>
          <Container
            component={"div"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { lg: "48px", xs: "20px" },
              justifyContent: "flex-end",
              px: { xs: "0px" },
            }}
          >
            <Button
              color="primary"
              component={NavLink}
              to="/"
              sx={{
                display: { sm: "block", xs: "none" },
                "&.active": { borderBottom: "2px solid #ffbe00" },
              }}
            >
              <Typography variant="h6" color="primary">
                Home
              </Typography>
            </Button>
            <Button
              component={NavLink}
              to={"/my-ticket"}
              sx={{
                display: { sm: "block", xs: "none" },
                "&.active": { borderBottom: "2px solid #ffbe00" },
              }}
            >
              <Typography variant="h6" color="primary">
                My Ticket
              </Typography>
            </Button>
            <Button
              component={NavLink}
              to={"/news"}
              sx={{
                display: { sm: "block", xs: "none" },
                "&.active": { borderBottom: "2px solid #ffbe00" },
              }}
            >
              <Typography variant="h6" color="primary">
                TIX ID News
              </Typography>
            </Button>

            <Divider
              orientation="vertical"
              flexItem
              sx={{
                width: 2,
                height: 24,
                bgcolor: "#9DA8BE",
                alignSelf: "center",
                display: { xs: "none", md: "block" },
              }}
            />
            <IconButton size="small">
              <Badge variant="standard" badgeContent={100} color="warning">
                <NotificationsNone />
              </Badge>
            </IconButton>
            {isAuthenticated ? (
              <Avatar
                sx={{
                  background: "linear-gradient(#F2C46F,#C6943F)",
                  fontFamily: "Poppins",
                }}
                >
                A
              </Avatar>
            ) : (
              <Tooltip title="Account Login">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/account/login")}
                >
                  <Typography
                    color="warning"
                    sx={{ textTransform: "capitalize" }}
                  >
                    Login
                  </Typography>
                </Button>
              </Tooltip>
            )}
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer open={showMenu} onClose={() => setShowMenu(false)} anchor="left">
        <Toolbar
          sx={{
            background: "#1A2C50",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{ color: "#FFFFFF", fontSize: "32px" }}
            onClick={() => setShowMenu(false)}
          >
            <ChevronLeft sx={{ fontSize: "32px" }} />
          </IconButton>
        </Toolbar>
        <Divider />
        <List
          sx={{
            background: "#1A2C50",
            height: "100vh",
            color: "#FFBE00",
            width: 200,
          }}
        >
          {navigationMenu.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={NavLink}
                to={`${text.link}`}
                sx={{
                  borderRadius: "5px",
                  transition: "background-color 0.3s",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.11)" },
                  "&.active": { backgroundColor: "rgba(255, 255, 255, 0.11)" },
                }}
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default Navbar;
