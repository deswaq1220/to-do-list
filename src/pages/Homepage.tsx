import { ChangeEventHandler, useState } from "react";
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
      <input placeholder="title" onChange={handleChangeTitle} value={title} />
      <textarea placeholder="content" onChange={handleChangeContent} value={content} />
      <button onClick={handleClickAdd} >추가하기</button>
      <hr />

      <ToDoList />

    </div>
  )
}

export default HomePage
