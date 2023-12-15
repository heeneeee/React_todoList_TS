import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import TodoList from "../components/TodoList/TodoList";

const HomePage = () => {
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
