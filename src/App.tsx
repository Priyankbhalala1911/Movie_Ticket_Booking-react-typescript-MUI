import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import "./App.css";
import Home from "./Pages/HomePage";
import MyTicket from "./Pages/MyTicketPage";
import TIXIDNews from "./Pages/TIXIDNewsPage";
import ComingMovies from "./Pages/ComingMoviesPage";
import TIXIDNews_Articles from "./Pages/TIXIDNews_ArticlesPage";
import MovieVideo from "./Pages/MovieVideoPage";
import Account from "./Pages/UserAccountPage";
import SlotBooking from "./Pages/SlotBooKingPage";
import ChooseSeat from "./Pages/ChooseSeatPage";
import TicketDetails from "./Pages/TicketDetailsPage";
import PaymentSuccess from "./Pages/PaymentSuccessPage";
import ActiveTicket from "./Section/MyTicketPage/ActiveTicket";
import TransactionList from "./Section/MyTicketPage/TrasactionList";
import Layout from "./Layout/Layout";
import { routes } from "./Config/routes";
import ScrollToTop from "./components/ScrollTop";
import AuthWrapper from "./Layout/AuthWrapper";
import TicketPage from "./Pages/TicketPage";
import { Toaster } from "react-hot-toast";
import { AuthHandler } from "./AuthHandler";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProfilePage from "./Pages/ProfilePage";
import {
  PaymentGuard,
  SeatGuard,
  SessionGuard,
  SlotTimeGuard,
} from "./Layout/SessionGuard";

const queryClient = new QueryClient();
const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AuthHandler />
        <ScrollToTop />
        <QueryClientProvider client={queryClient}>
          <Toaster position="top-center" reverseOrder={false} />
          <Routes>
            <Route path={`${routes.Account}/*`} element={<Account />}>
              <Route path="*" element={<Navigate to={routes.Login} />} />
            </Route>
            <Route path={routes.default} element={<Layout />}>
              <Route index element={<Home />} />
              <Route element={<AuthWrapper />}>
                <Route path={routes.Profile} element={<ProfilePage />} />
                <Route element={<SessionGuard />}>
                  <Route path={routes.slotBooking} element={<SlotBooking />} />
                  <Route element={<SlotTimeGuard />}>
                    <Route path={routes.chooseSeat} element={<ChooseSeat />} />
                    <Route element={<SeatGuard />}>
                      <Route
                        path={routes.ticketDetails}
                        element={<TicketDetails />}
                      />
                      <Route element={<PaymentGuard />}>
                        <Route
                          path={routes.paymentSuccess}
                          element={<PaymentSuccess />}
                        />
                      </Route>
                    </Route>
                  </Route>
                </Route>
                <Route path={routes.myTicket} element={<MyTicket />}>
                  <Route
                    index
                    element={<Navigate to={routes.activeTicket} replace />}
                  />
                  <Route
                    path={routes.activeTicket}
                    element={<ActiveTicket />}
                  />
                  <Route
                    path={routes.transactionList}
                    element={<TransactionList />}
                  />
                </Route>
                <Route path={routes.TIXNews} element={<TIXIDNews />} />
                <Route
                  path={routes.TIXNewsArticles}
                  element={<TIXIDNews_Articles />}
                />
                <Route path={routes.TIXNewsVideo} element={<MovieVideo />} />
                <Route path={routes.ComingMovies} element={<ComingMovies />} />

                <Route path={routes.ticket} element={<TicketPage />} />
              </Route>
            </Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
