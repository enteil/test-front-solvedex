import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { RegisterAction } from "../../../store/thunks/authThunks";
import { Title } from "../../../components/Title/Title";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [names, setNames] = useState("");
  const [lastNames, setLastNames] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const registerData = {
      email,
      password,
      names,
      lastNames,
    };

    dispatch(RegisterAction(registerData, navigate));
  };

  function goToLogin() {
    navigate("/login");
  }
  return (
    <div className="register-view">
      <div className="register-form">
        <form className="register-form-container" onSubmit={handleRegister}>
          <Title name={"Create your account"}></Title>
          <Input
            label="Names"
            name="names"
            type="text"
            value={names}
            setState={setNames}
          />
          <Input
            label="Last Names"
            name="lastnames"
            type="text"
            value={lastNames}
            setState={setLastNames}
          />
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
            label="Register"
            type="submit"
            onClick={handleRegister}
            variant="primary"
          />
          <p>
            Already have an account?{" "}
            <span className="singup-link" onClick={() => goToLogin()}>
              Log in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
