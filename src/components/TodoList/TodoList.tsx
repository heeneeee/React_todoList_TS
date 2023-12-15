import { deleteTodo, getTodos, switchTodo } from "../../api/todos";
import { useMutation, useQuery, useQueryClient } from "react-query";
import type { TList } from "../Input/Input";

const TodoList = () => {
  const { isLoading, isError, data } = useQuery<TList[]>("todos", getTodos);
  console.log("data", data);

  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos"); //useQuery key 가 중요! // todos를 무효화
      console.log("삭제 성공!");
    },
  });
  const updateMutation = useMutation(switchTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos"); //useQuery key 가 중요! // todos를 무효화
      console.log("수정 성공!");
    },
  });

  // 삭제 핸들러
  const onDeleteHandler = (id: string) => {
    deleteMutation.mutate(id);
  };
  // 스위치 핸들러 (!isDone)
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
    <div>
      해야할 일
      {data
        .filter((item) => item.isDone === false)
        .map((todo) => (
          <div key={todo.id}>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
            <button onClick={() => onSwitchHandler(todo.id, todo.isDone)}>
              완료
            </button>
            <button onClick={() => onDeleteHandler(todo.id)}>삭제</button>
          </div>
        ))}
      완료한 일
      {data
        .filter((item) => item.isDone === true)
        .map((todo) => (
          <div key={todo.id}>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
            <button onClick={() => onSwitchHandler(todo.id, todo.isDone)}>
              취소
            </button>
            <button onClick={() => onDeleteHandler(todo.id)}>삭제</button>
          </div>
        ))}
    </div>
  );
};

export default TodoList;
