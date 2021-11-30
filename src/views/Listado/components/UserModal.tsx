import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestModal } from "../../../store/actions/modalAction";
import { RootState } from "../../../store/reducers";
import styled from "styled-components";
import { User } from "../../../types/users";

export default function UserModal() {
  const dispatch = useDispatch();
  const modalData: User = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      if (e.target.id !== "modal") dispatch(requestModal({}));
    }
  });

  return (
    <Container>
      <ModalCard id="modal">
        <button onClick={() => dispatch(requestModal({}))}>
          <span role="img" aria-label="close">
            ❌
          </span>
        </button>
        <img src={modalData.avatar} alt="modal" id="modal" />
        <p id="modal"> {modalData.email} </p>
        <p id="modal">
          {modalData.first_name} {modalData.last_name}
        </p>
      </ModalCard>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModalCard = styled.div`
  position: fixed;
  border-radius: 5px;
  padding: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 230px;

  border: 1px solid #fff;
  background-color: rgba(157, 170, 242, 0.7);

  img {
    border-radius: 5px;
    margin-bottom: 30px;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 20px;
    &:hover {
      cursor: pointer;
    }
  }

  p {
    margin: 10px 0;
    text-align: center;
  }
  button {
    float: right;
  }
  body {
    background-color: #f5f5f5;
  }
`;
