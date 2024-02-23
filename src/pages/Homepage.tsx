import { ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom";
import { useToDos } from "../contexts/todos.context";


function HomePage() {
  const { toDos } = useToDos
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleClickAdd = () => {
    const newTodo = {
      id: toDos.length + 1, title, content, isComplete: false
    }
    const newTodoList = [...toDos, newTodo]
    setTodoList(newTodoList)
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

  const handleClickDelete = (toDoId: number) => {
    // const newToDoList: ToDoList = []
    const newToDoList = toDos.filter((toDo) => {
      return toDo.id !== toDoId
    })
    setTodoList(newToDoList)
  }

  const handleClickToggleIsComplete = (toDoId: number) => {
    const targetToDo = toDos.find(toDo => toDo.id === toDoId)
    if (!targetToDo) return;

    targetToDo.isComplete = !targetToDo.isComplete;
    const newToDoList = [...toDos]
    setTodoList(newToDoList)
  }
  return (

    <div>
      <h1>할 일 목록</h1>
      <hr />
      <ul>
        <input placeholder="title" onChange={handleChangeTitle} value={title} />
        <textarea placeholder="content" onChange={handleChangeContent} value={content} />
        <button onClick={handleClickAdd} >추가하기</button>
        <hr />
        {toDos.map((toDo) =>

          <li key={toDo.id}>
            <Link to={`/todos/${toDo.id}`}>
              <span style={{
                textDecoration: toDo.isComplete ? 'line-though' : 'none'
              }}>{toDo.title}</span>
              <button onClick={() => handleClickDelete(toDo.id)}>삭제</button>
              <button onClick={() => handleClickToggleIsComplete(toDo.id)}>
                {toDo.isComplete ? '완료 취소' : '완료'}
              </button>

            </Link>
          </li>)}

      </ul>
    </div>
  )
}

export default HomePage
