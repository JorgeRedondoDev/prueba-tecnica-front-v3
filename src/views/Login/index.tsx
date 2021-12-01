import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestToken } from "../../store/actions/getTokenAction";
import { RootState } from "../../store/reducers";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "Atoms/Button";
import styled from "styled-components";

function Login() {
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.token);

  const [preventFirstCall, setPreventFirstCall] = useState(false);
  const [loginData, setlLoginData] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  useEffect(() => {
    dispatchFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  function dispatchFunction() {
    if (preventFirstCall && result.token) {
      localStorage.setItem("token", result.token);
      toast.success("Successfull!");
      setTimeout(() => {
        window.location.href = "/users";
      }, 1000);
    } else {
      preventFirstCall && toast.error("Email or Password invalid");
    }
  }

  function handleEmail(e) {
    setlLoginData({ ...loginData, email: e.target.value });
  }
  function handlePassword(e) {
    setlLoginData({ ...loginData, password: e.target.value });
  }

  function handleSummit(e) {
    e.preventDefault();
    dispatch(requestToken(loginData));
    setPreventFirstCall(true);
  }

  return (
    <Form>
      <Toaster position="top-center" data-testid="modal" />
      <h1>Login</h1>
      <div className="inputs">
        <label>
          <h3>Email</h3>
          <input type="text" value={loginData.email} onChange={handleEmail} />
        </label>
        <label>
          <h3>Password</h3>
          <input
            type="password"
            value={loginData.password}
            onChange={handlePassword}
          />
        </label>
      </div>
      <Button type="submit" onClick={handleSummit} data-testid="login_button">
        Submit
      </Button>
    </Form>
  );
}
//Styled-component Form media query

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  h1 {
    font-size: 2rem;
    margin: 50px 0 20px 0;
  }

  .inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
      width: 100%;
      height: 100%;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }

    input {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: 3px solid transparent;
      box-shadow: 0px 0px 20px 1px rgba(157, 170, 242, 0.5);
      padding: 0 10px;
      font-size: 1.2rem;
      max-width: 400px;

      &:focus {
        outline: none;
      }
      &:hover {
        border: 3px solid #9daaf2;
      }
    }
  }

  @media (min-width: 800px) {
    .inputs {
      flex-direction: row;
    }
  }
`;

export default Login;
