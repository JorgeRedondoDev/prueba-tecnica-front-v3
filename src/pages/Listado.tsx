import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUser } from "../store/actions/getUsersAction";
import { RootState } from "../store/reducers";

function Listado() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const result = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(requestUser(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const users = result?.map((user) => (
    <div key={user.id}>
      <h3>{user.email}</h3>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <img src={user.avatar} alt={user.avatar} />
    </div>
  ));

  return (
    <div>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/users";
        }}
      >
        Cerrar sesión
      </button>
      <button onClick={() => (page > 1 ? setPage(page - 1) : null)}>-</button>
      <button onClick={() => (page < 2 ? setPage(page + 1) : null)}>+</button>
      {page}
      {result === undefined ? <div>cargando...</div> : users}
    </div>
  );
}

export default Listado;
