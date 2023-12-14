import React from "react";
import uuid from "react-uuid";
// import Todo from "../Todo/Todo";
import { getTodos } from "../../../api/todos";
import { useQuery } from "react-query";

interface TodoList {
  id: string;
  title: string;
  contents: string;
  isDone: boolean;
}
const TodoList: React.FC<TodoList> = ({ isDone, title, contents, id }) => {
  const { isLoading, isError, data } = useQuery("todos", getTodos);

  console.log("data", data);
  if (isLoading) {
    return <h1>로딩중입니다</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다</h1>;
  }

  return (
    <div>
      {isDone ? "완료한 일" : "해야할 일 "}
      <div>{title}</div>
      <div>{contents}</div>
    </div>
  );
};

export default TodoList;
