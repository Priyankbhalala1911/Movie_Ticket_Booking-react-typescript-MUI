import { Navigate, Outlet } from "react-router";
import { routes } from "../Config/routes";
import { hasSession } from "../Utils";
import { useSelector } from "react-redux";
import { RootState } from "../Store";

export const SessionGuard: React.FC = () => {
  const movieId = useSelector(
    (state: RootState) => state.movies.selectedMovieId
  );
  if (!hasSession() && movieId) {
    return <Navigate to={routes.default} replace />;
  }
  return <Outlet />;
};

export const SlotTimeGuard: React.FC = () => {
  const slotTime = useSelector((state: RootState) => state.shows.showTimes);
  if (!slotTime) {
    return <Navigate to={routes.default} replace />;
  }
  return <Outlet />;
};

export const SeatGuard: React.FC = () => {
  const seats = useSelector((state: RootState) => state.seats.selectedSeat);
  if (seats.length === 0) {
    return <Navigate to={routes.chooseSeat} replace />;
  }
  return <Outlet />;
};

export const PaymentGuard: React.FC = () => {
  const payment = useSelector((state: RootState) => state.shows.payment_status);
  if (!payment) {
    return <Navigate to={routes.myTicket} replace />;
  }
  return <Outlet />;
};
