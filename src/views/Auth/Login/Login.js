import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Title } from "../../../components/Title/Title";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

import { LoginAction } from "../../../store/thunks/authThunks";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginAction({ email, password }, navigate));
  };

  function goToRegister() {
    navigate("/register");
  }
  return (
    <div className="login-view">
      <div className="login-form">
        <form className="login-form-container" onSubmit={handleLogin}>
          <Title name={"Wellcome back"}></Title>
          <Input
            label="Email address"
            name="email"
            type="text"
            value={email}
            setState={setEmail}
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={password}
            setState={setPassword}
          />
          <Button
            label="Continue"
            type="submit"
            onClick={handleLogin}
            variant="primary"
          />
          <p>
            Don't have an account?{" "}
            <span className="singup-link" onClick={() => goToRegister()}>
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
