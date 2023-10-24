import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Login } from "./views/Auth/Login/Login";
import { NotFoundPage } from "./views/NotFoundPage/NotFoundPage";

import { Dashboard } from "./views/Dashboard/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import CheckAuth from "./middleware/checkAuth";
import CheckGuest from "./middleware/checkGuest";
import GlobalSnackbar from "./components/Snackbar/GlobalSnackbar";

import { hideSnackbar } from "./store/slices/snackbarSlice";

function App() {
  const dispatch = useDispatch();
  const snackbarState = useSelector((state) => state.snackbar);
  return (
    <>
      <Router>
        <GlobalSnackbar
          isOpen={snackbarState.isOpen}
          message={snackbarState.message}
          onClose={() => dispatch(hideSnackbar())}
        />
        <Routes>
          <Route
            path="/login"
            element={
              <CheckGuest>
                <Login />
              </CheckGuest>
            }
          />
          <Route
            path="/dashboard"
            element={
              <CheckAuth>
                <DashboardLayout />
              </CheckAuth>
            }
          >
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;