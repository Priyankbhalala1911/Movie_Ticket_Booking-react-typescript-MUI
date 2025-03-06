import { Box } from "@mui/material";
import React from "react";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router";
import ActiveTicket from "./ActiveTicket";
import TransactionList from "./TrasactionList";

const MyTicket: React.FC = () => {
  const location = useLocation();
  const isLocation = location.pathname === "/my-ticket/active-ticket";
  return (
    <>
      <Box display="flex" gap={{ lg: "16px", md: "14px", sm: "12px", xs: "0" }}>
        <SideBar />
        {isLocation ? <ActiveTicket /> : <TransactionList />}
      </Box>
    </>
  );
};
export default MyTicket;
