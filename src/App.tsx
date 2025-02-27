import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Home from "./Pages/HomePage/Home";
import MyTicket from "./Pages/MyTicket";
import TIXIDNews from "./Pages/TIXIDNews";
import Footer from "./components/navbar/Footer";
import ComingMovies from "./Pages/ComingMovies";
import TIXIDNews_Articles from "./Pages/TIXIDNews_Article";
import MovieVideo from "./Pages/MovieVideo";
import Account from "./Pages/UserAccount/Account";
import SlotBooking from "./Pages/SlotBooKingPage/SloteBooking";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/account/*" element={<Account />}>
            <Route path="*" element={<Navigate to="/account/login" />} />
          </Route>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          ></Route>
          <Route
            path="/my-ticket"
            element={
              <Layout>
                <MyTicket />
              </Layout>
            }
          />
          <Route
            path="/news"
            element={
              <Layout>
                <TIXIDNews />
              </Layout>
            }
          />
          <Route
            path="/news/:id"
            element={
              <Layout>
                <TIXIDNews_Articles />
              </Layout>
            }
          />
          <Route
            path="/news/video/:id"
            element={
              <Layout>
                <MovieVideo />
              </Layout>
            }
          />
          <Route
            path="/comingMovies"
            element={
              <Layout>
                <ComingMovies />
              </Layout>
            }
          />
          <Route
            path="/slot-booking"
            element={
              <Layout>
                <SlotBooking />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const islogin = location.pathname === "/login";
  return (
    <>
      {!islogin && <Navbar />}
      {children}
      {!islogin && <Footer />}
    </>
  );
};

export default App;
