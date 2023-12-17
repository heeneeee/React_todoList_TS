import styled from "styled-components";

export const StFormWrapper = styled.form`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

export const StInput = styled.input`
  width: 150px;
  height: 30px;
  margin-right: 10px;
  border: 1.5px solid lightgray;
  border-radius: 30px;
  padding: 5px;
  font-size: small;
`;

export const StBtn = styled.button`
  width: 80px;
  height: 30px;

  background-color: #f1d4e5;
  color: #413543;
  border: 1px solid lightgray;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }
`;
