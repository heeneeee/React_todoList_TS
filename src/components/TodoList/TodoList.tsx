import { getTodos } from "../../api/todos";
import { useQuery } from "react-query";
import React from "react";
import type { TList } from "../Input/Input";

const TodoList = () => {
  const { isLoading, isError, data } = useQuery<TList[]>("todos", getTodos);
  console.log("data", data);

  if (isLoading) {
    return <p>로딩중입니다</p>;
  }

  if (isError || !data) {
    return <p>에러가 발생하였습니다</p>;
  }

  return (
    <div>
      {data
        .filter((item) => item.isDone === false)
        .map((todo) => (
          <div key={todo.id}>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
