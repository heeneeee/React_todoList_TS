// axios 요청이 들어가는 모든 모듈
import axios from "axios";

// 조회
const getTodos = async () => {
  // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);

  const response = await axios.get("http://localhost:5000/todos");
  console.log("response", response.data);
  return response.data;
};

// 추가
// const addTodo = async (newTodo) => {
//   await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
// };

export { getTodos };
