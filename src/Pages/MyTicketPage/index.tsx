import { Box } from "@mui/material";
import React from "react";
import SideBar from "../../Section/MyTicketPage/SideBar";
import { Outlet } from "react-router";

const MyTicket: React.FC = () => {
  return (
    <>
      <Box display="flex" gap={{ lg: "16px", md: "14px", sm: "12px", xs: "0" }}>
        <SideBar />
        <Outlet />
      </Box>
    </>
  );
};
export default MyTicket;
