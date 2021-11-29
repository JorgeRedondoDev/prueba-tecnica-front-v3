import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestToken } from "../store/actions/getTokenAction";
import { RootState } from "../store/reducers";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.token);

  const [preventFirstCall, setPreventFirstCall] = useState(false);
  const [loginData, setlLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatchFunction();
  }, [result]);

  function dispatchFunction() {
    if (preventFirstCall && result.token) {
      localStorage.setItem("token", result.token);
      toast.success("Successfull!");
      setTimeout(() => {
        window.location.href = "/users";
      }, 1000);
    } else {
      preventFirstCall && toast.error("emial or password invalid");
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
    <form>
      <Toaster position="top-right" />
      Login
      <label>
        Email:
        <input type="text" value={loginData.email} onChange={handleEmail} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={loginData.password}
          onChange={handlePassword}
        />
      </label>
      <button type="submit" onClick={handleSummit}>
        Submit
      </button>
    </form>
  );
}

export default Login;
