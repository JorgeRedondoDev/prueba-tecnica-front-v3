import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestModal } from "../store/actions/modalAction";
import { RootState } from "../store/reducers";
import styled from "styled-components";
import { User } from "../types/users";

export default function UserModal() {
  const dispatch = useDispatch();
  const modalData: User = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      console.log(e.target.id);
      if (e.target.id !== "modal") dispatch(requestModal({}));
    }
  });

  return (
    <Padre>
      <ModalCard id="modal">
        <button onClick={() => dispatch(requestModal({}))}>Click</button>
        <img src={modalData.avatar} alt="modal" />
        <p> {modalData.email} </p>
        <p>
          {modalData.first_name} {modalData.last_name}
        </p>
      </ModalCard>
    </Padre>
  );
}

const Padre = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;
const ModalCard = styled.div`
  position: fixed;
  border-radius: 5px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;

  .modal-content {
  }

  button {
    float: right;
  }
  body {
    background-color: #f5f5f5;
  }
`;
