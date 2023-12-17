import React, { useState } from "react";
import { StInput, StBtn, StFormWrapper } from "./style";
import uuid from "react-uuid";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../../api/todos";

export interface TList {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

const Input = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos"); //useQuery key 가 중요! // todos를 무효화
      // console.log("성공하였습니다!");
    },
  });

  const onTitleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onContentChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    if (title === "" && content === "") {
      alert("내용을 입력해주세요");
      return;
    }
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
      <StFormWrapper onSubmit={onSubmitHandler}>
        <StInput
          type="text"
          value={title}
          onChange={onTitleChangeHandler}
          autoFocus
        />
        <StInput
          type="text"
          value={content}
          onChange={onContentChangeHandler}
        />
        <StBtn type="submit">등 록</StBtn>
      </StFormWrapper>
    </div>
  );
};

export default Input;
