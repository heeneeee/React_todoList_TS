import Header from "../redux/components/Header/Header";
import Footer from "../redux/components/Footer/Footer";
import Input from "../redux/components/Input/Input";
import TodoList from "../redux/components/TodoList/TodoList";

const HomePage: React.FC = () => {
  const TodoList: TodoList = {
    id: "",
    title: "",
    contents: "",
    isDone: Boolean,
  };

  return (
    <>
      <Header />
      <Input />
      <TodoList />

      <Footer />
    </>
  );
};

export default HomePage;
