import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router";
import RegistrationPage from "../../Section/UserAccountPage/RegistrationPage";
import { useState } from "react";
import RegistrationPage2 from "../../Section/UserAccountPage/RegistrationPage-2";
import LoginPage from "../../Section/UserAccountPage/LoginPage";

const Account: React.FC = () => {
  const location = useLocation();
  const [direction, setDirection] = useState(1);

  const pageVariants = {
    initial: { x: `${100 * direction}%`, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
    exit: {
      x: `${-100 * direction}%`,
      opacity: 0,
      transition: { duration: 0 },
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Routes location={location} key={location.pathname}>
          <Route
            path="login"
            element={<LoginPage setDirection={setDirection} />}
          />
          <Route
            path="registration"
            element={<RegistrationPage setDirection={setDirection} />}
          />
          <Route
            path="registration-2"
            element={<RegistrationPage2 setDirection={setDirection} />}
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
export default Account;
