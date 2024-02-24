import { ChangeEventHandler, useState } from "react";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import { useToDos } from "../contexts/todos.context";


function HomePage() {
  const { toDos, setToDos } = useToDos();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleClickAdd = () => {
    const newTodo = {
      id: toDos.length + 1, title, content, isComplete: false
    }
    const newTodoList = [...toDos, newTodo]
    setToDos(newTodoList)
    console.log(newTodoList)
    setTitle("")
    setContent("")
  }

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value)
  }



  return (

    <div>
      <h1>할 일 목록</h1>
      <hr />
      <ToDoForm
        title={title}
        content={content}
        handleChangeTitle={handleChangeTitle}
        handleChangeContent={handleChangeContent}
        handleClickAdd={handleClickAdd}

      />

      <hr />

      <ToDoList />

    </div>
  )
}

export default HomePage
