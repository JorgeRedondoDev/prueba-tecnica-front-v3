import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUser } from "../store/actions/getUsersAction";
import { RootState } from "../store/reducers";
import UserCard from "../components/UserCard";
import UserModal from "components/UserModal";
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

  const users = result?.map((user) => <UserCard user={user} key={user.id} />);

  return (
    <>
      <Container>
        {userModal.id === undefined ? null : <UserModal />}
        <ContainerButtons>
          <Button onClick={() => (page > 1 ? setPage(page - 1) : null)}>
            <span role="img" aria-label="previous">
              ⏪ page
            </span>
          </Button>
          {page}
          <Button onClick={() => (page < 2 ? setPage(page + 1) : null)}>
            page{" "}
            <span role="img" aria-label="next">
              ⏩
            </span>
          </Button>
        </ContainerButtons>

        <ButtonLogout
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/users";
          }}
        >
          Logout
          <span role="img" aria-label="close">
            ❌
          </span>
        </ButtonLogout>
      </Container>

      {result === undefined ? (
        <div>Loading...</div>
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

const Button = styled.button`
  background-color: #9daaf2;
  box-shadow: 0px 0px 20px 1px rgba(157, 170, 242, 0.5);
  border-radius: 5px;
  font-size: 1em;
  color: #f6f6f6;
  border: 2px solid #ccc;

  margin: 1em;
  padding: 0.25em 1em;
  &:hover {
    cursor: pointer;
    background: #6c7bbf;
    color: #fff;
  }
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
