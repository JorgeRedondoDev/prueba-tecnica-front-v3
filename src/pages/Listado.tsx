import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUser } from "../store/actions/getUsersAction";
import { RootState } from "../store/reducers";
import UserCard from "../components/UserCard";
import styled from "styled-components";

function Listado() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const result = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(requestUser(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const users = result?.map((user) => <UserCard user={user} key={user.id} />);

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
      {result === undefined ? (
        <div>Loading...</div>
      ) : (
        <UserCardContainer>{users}</UserCardContainer>
      )}
    </div>
  );
}

const UserCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  gap: 15% 0px;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, auto);
    gap: 10% 0px;
  }

  @media (max-width: 530px) {
    grid-template-columns: repeat(1, auto);
      gap: 5% 0px;
`;
export default Listado;
