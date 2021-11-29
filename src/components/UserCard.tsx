import React from "react";
import { User } from "../types/users";
import styled from "styled-components";

export default function UserCard({ user }: { user: User }) {
  return (
    <Modal>
      <img src={user.avatar} alt={user.email} />
      <Name>
        {user.first_name} {user.last_name}
      </Name>
    </Modal>
  );
}

const Modal = styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 20px 1px rgba(157, 170, 242, 0.5);
  padding: 20px;
  background-color: #9daaf2;
  width: 180px;
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ccc;
  color: #f6f6f6;

  &:hover {
    cursor: pointer;
    background-color: #6c7bbf;
    border: 2px none;
    color: #c3c3c3;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  p {
    font-size: 20px;
  }
`;

const Name = styled.p`
  font-weight: bold;
`;
