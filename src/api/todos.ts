import axios from "axios";

// 조회
const getTodos = async (): Promise<any> => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/todos`
    );

    console.log("get", response.data);
    return response.data;
  } catch (error) {
    console.error("Error in axios.get:", error);
    throw error;
  }
};

// 추가
const addTodo = async (newTodo: any): Promise<void> => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/todos`,
      newTodo
    );
    console.log("ADD", response.data);
  } catch (error) {
    console.error(error, "에러 발생");
  }
};

//삭제
const deleteTodo = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
  } catch (error) {
    console.error(console.log(error, "에러 발생"));
  }
};

// 스위치
const switchTodo = async ({
  // 하나의 인자만 넘겨줄 수 있으므로, 객체형태로 넘겨준다
  id,
  isDone,
}: {
  id: string;
  isDone: boolean;
}): Promise<void> => {
  try {
    //object 형태로 키, 밸류 값 넘겨준다
    await axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, {
      isDone,
    });
  } catch (error) {
    console.error(console.log(error, "에러 발생"));
  }
};
export { getTodos, addTodo, deleteTodo, switchTodo };
