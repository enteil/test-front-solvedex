import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import {
  LoginAction,
  CheckEmailAction,
} from "../../../store/thunks/authThunks";
import { Title } from "../../../components/Title/Title";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);

  const handleCheckEmail = async (e) => {
    e.preventDefault();
    const check = await dispatch(CheckEmailAction({ email }));
    if (check && check.statusCode === 200) {
      setStep(step + 1);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginAction({ email, password }, navigate));
  };

  return (
    <div className="login-view">
      <div className="login-form">
        {step === 0 && (
          <form className="login-form-container" onSubmit={handleCheckEmail}>
            <>
              <Title name={"Wellcome back"}></Title>
              <Input
                label="Email address"
                name="email"
                type="text"
                value={email}
                setState={setEmail}
              />
              <Button
                label="Continue"
                type="submit"
                onClick={handleCheckEmail}
                variant="primary"
              />
            </>
          </form>
        )}
        {step === 1 && (
          <form className="login-form-container" onSubmit={handleLogin}>
            <>
              <Title name={"Wellcome back"}></Title>
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
            </>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
