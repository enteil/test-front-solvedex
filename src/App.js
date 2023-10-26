import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Login } from "./views/Auth/Login/Login";
import { Register } from "./views/Auth/Register/Register";
import { Dashboard } from "./views/Dashboard/Dashboard";
import { MyBlogs } from "./views/Dashboard/MyBlogs";
import { Blog } from "./views/Dashboard/Blog";
import { NotFoundPage } from "./views/NotFoundPage/NotFoundPage";

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
            path="/register"
            element={
              <CheckGuest>
                <Register />
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
            <Route path="mine-blogs" element={<MyBlogs />} />
            <Route path="blog" element={<Blog />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
