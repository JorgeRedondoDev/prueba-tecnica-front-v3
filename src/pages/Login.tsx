import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestToken } from "../store/actions/getTokenAction";
import { RootState } from "../store/reducers";

function Login() {
  const dispatch = useDispatch();

  const person = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };
  const result = useSelector((state: RootState) => state.token);
  console.log("result", result.token);

  useEffect(() => {
    dispatch(requestToken(person));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Login</div>;
}

export default Login;
