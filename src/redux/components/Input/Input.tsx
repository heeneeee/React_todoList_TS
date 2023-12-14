import { StInputWrapper, StInput, StSubmitBtn } from "./Input.styled";
import { useState } from "react";
import uuid from "react-uuid";

export default function Input() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onChangeContentsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !contents) {
      return alert("빈칸없이 입력 바랍니다.");
    }

    // const newTodo: React.FC<{ id: string; title: string; contents: string }> = {
    // id: uuid(),
    // title,
    // contents,
    // isDone,
    // };
  };
  return (
    <>
      <StInputWrapper>
        <form onSubmit={onSubmitHandler}>
          <StInput
            type="text"
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={onChangeTitleHandler}
          />
          <StInput
            type="text"
            placeholder="내용을 입력해주세요"
            value={contents}
            onChange={onChangeContentsHandler}
          />
          <StSubmitBtn type="submit">등록</StSubmitBtn>
        </form>
      </StInputWrapper>
    </>
  );
}
