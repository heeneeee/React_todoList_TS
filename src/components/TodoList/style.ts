import exp from "constants";
import styled from "styled-components";

export const StTodoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StTodoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

export const StTodo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 2px solid lightgray;
  width: 250px;
  height: 200px;
`;

export const StBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
`;

export const StBtn = styled.button`
  width: 80px;
  height: 30px;
  color: #4f4a45;
  border: 2px solid #73bbc9;
  border-radius: 30px;
  background-color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: all 0.2s;
  }
`;

export const StTitle = styled.div`
  font-size: 18px;
  margin-bottom: 30px;
  color: #6c5f5b;
`;
export const StContent = styled.div`
  font-size: 15px;
  color: #6c5f5b;
`;

export const StHaveToDoAndDone = styled.div`
  font-size: 20px;
  color: darkgray;
  margin-top: 70px;
  margin-bottom: 50px;
  font-weight: 600;
`;
