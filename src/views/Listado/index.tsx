import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUser } from "../../store/actions/getUsersAction";
import { RootState } from "../../store/reducers";
import { User } from "../../types/users";
import UserCard from "./components/UserCard";
import UserModal from "views/Listado/components/UserModal";
import { Button } from "Atoms/Button";
import styled from "styled-components";

function Listado() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const result = useSelector((state: RootState) => state.users);
  const userModal = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    dispatch(requestUser(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const users = result?.map((user: User) => (
    <UserCard user={user} key={user.id} />
  ));

  return (
    <>
      <Container>
        {userModal?.id === undefined ? null : <UserModal />}
        <ContainerButtons>
          <Button onClick={() => (page > 1 ? setPage(page - 1) : null)}>
            Previous page
          </Button>
          {page}
          <Button onClick={() => (page < 2 ? setPage(page + 1) : null)}>
            Next page
          </Button>
        </ContainerButtons>

        <ButtonLogout
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/users";
          }}
        >
          Logout
        </ButtonLogout>
      </Container>
      {result[0]?.id === undefined ? (
        <div data-testid="loading">Loading...</div>
      ) : (
        <UserCardContainer>{users}</UserCardContainer>
      )}
    </>
  );
}
const Container = styled.nav`
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const ButtonLogout = styled(Button)`
  position: fixed;
  right: 0;
  @media (max-width: 800px) {
    position: static;
    right: auto;
  }
`;

const UserCardContainer = styled.div`
  margin-top: 30px;
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
