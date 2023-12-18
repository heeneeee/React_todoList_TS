import { deleteTodo, getTodos, switchTodo } from "../../api/todos";
import { useMutation, useQuery, useQueryClient } from "react-query";
import type { TList } from "../Input/Input";
import {
  StTodoListWrapper,
  StTodoContainer,
  StTodo,
  StBtns,
  StBtn,
  StTitle,
  StContent,
  StHaveToDoAndDone,
} from "./style";

const TodoList = () => {
  const { isLoading, isError, data } = useQuery<TList[]>("todos", getTodos);
  console.log("data", data);

  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const updateMutation = useMutation(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  // 삭제 핸들러
  const onDeleteHandler = (id: string) => {
    deleteMutation.mutate(id);
  };

  // 스위치 핸들러
  const onSwitchHandler = (id: string, isDone: boolean) => {
    updateMutation.mutate({ id, isDone: !isDone });
  };

  if (isLoading) {
    return <p>로딩중입니다</p>;
  }

  if (isError || !data) {
    return <p>에러가 발생하였습니다</p>;
  }

  return (
    <StTodoListWrapper>
      <StHaveToDoAndDone>Thing to do</StHaveToDoAndDone>
      <StTodoContainer>
        {data
          .filter((item) => item.isDone === false)
          .map((todo) => (
            <StTodo>
              <div key={todo.id}>
                <StTitle>{todo.title}</StTitle>
                <StContent>{todo.content}</StContent>
                <StBtns>
                  <StBtn onClick={() => onSwitchHandler(todo.id, todo.isDone)}>
                    완 료
                  </StBtn>
                  <StBtn onClick={() => onDeleteHandler(todo.id)}>삭 제</StBtn>
                </StBtns>
              </div>
            </StTodo>
          ))}
      </StTodoContainer>
      <StHaveToDoAndDone>Work done</StHaveToDoAndDone>
      <StTodoContainer>
        {data
          .filter((item) => item.isDone === true)
          .map((todo) => (
            <StTodo>
              <div key={todo.id}>
                <StTitle>{todo.title}</StTitle>
                <StContent>{todo.content}</StContent>
                <StBtns>
                  <StBtn onClick={() => onSwitchHandler(todo.id, todo.isDone)}>
                    취 소
                  </StBtn>
                  <StBtn onClick={() => onDeleteHandler(todo.id)}>삭 제</StBtn>
                </StBtns>
              </div>
            </StTodo>
          ))}
      </StTodoContainer>
    </StTodoListWrapper>
  );
};

export default TodoList;
