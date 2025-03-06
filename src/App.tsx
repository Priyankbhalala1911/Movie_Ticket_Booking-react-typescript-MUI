import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./Pages/HomePage/Home";
import MyTicket from "./Pages/My-Ticket/MyTicket";
import TIXIDNews from "./Pages/TIXIDNews";
import Footer from "./components/navbar/Footer";
import ComingMovies from "./Pages/ComingMovies";
import TIXIDNews_Articles from "./Pages/TIXIDNews_Article";
import MovieVideo from "./Pages/MovieVideo";
import Account from "./Pages/UserAccount/Account";
import SlotBooking from "./Pages/SlotBooKingPage/SloteBooking";
import ChooseSeat from "./Pages/Choose-Seat/ChooseSeat";
import TicketDetails from "./Pages/Ticket-Details/TicketDetails";
import PaymentSuccess from "./Pages/PaymentSuccess";
import ActiveTicket from "./Pages/My-Ticket/ActiveTicket";
import TransactionList from "./Pages/My-Ticket/TrasactionList";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/account/*" element={<Account />}>
            <Route path="*" element={<Navigate to="/account/login" />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="slot-booking" element={<SlotBooking />} />
            <Route path="choose-seat" element={<ChooseSeat />} />
            <Route path="ticket-details" element={<TicketDetails />} />
            <Route path="payment-success" element={<PaymentSuccess />} />
            <Route path="my-ticket" element={<MyTicket />}>
              <Route index element={<Navigate to="active-ticket" replace />} />
              <Route path="active-ticket" element={<ActiveTicket />} />
              <Route path="transaction-list" element={<TransactionList />} />
            </Route>
            <Route path="news" element={<TIXIDNews />} />
            <Route path="news/:id" element={<TIXIDNews_Articles />} />
            <Route path="news/video/:id" element={<MovieVideo />} />
            <Route path="comingMovies" element={<ComingMovies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Layout = () => {
  const location = useLocation();
  const islogin = location.pathname === "/login";
  return (
    <>
      {!islogin && <Navbar />}
      <Outlet />
      {!islogin && <Footer />}
    </>
  );
};

export default App;
