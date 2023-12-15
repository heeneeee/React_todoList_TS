import React, { useState } from "react";
import { StInput, StBtn } from "./style";
import uuid from "react-uuid";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../../api/todos";

export interface TList {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

export default function Input() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos"); //useQuery key 가 중요! // todos를 무효화
      console.log("성공하였습니다!");
    },
  });

  const onTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onContentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo: TList = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    mutation.mutate(newTodo);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <StInput type="text" value={title} onChange={onTitleChangeHandler} />
        <StInput
          type="text"
          value={content}
          onChange={onContentChangeHandler}
        />
        <StBtn type="submit">등록</StBtn>
      </form>
    </div>
  );
}
