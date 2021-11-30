import styled from "styled-components";

export const Button = styled.button`
  background-color: #9daaf2;
  box-shadow: 0px 0px 20px 1px rgba(157, 170, 242, 0.5);
  border-radius: 5px;
  font-size: 1em;
  color: #f6f6f6;
  border: 2px solid #ccc;
  min-width: 150px;
  min-height: 40px;

  margin: 1em;
  padding: 0.25em 1em;
  &:hover {
    cursor: pointer;
    background: #6c7bbf;
    color: #fff;
  }
`;
