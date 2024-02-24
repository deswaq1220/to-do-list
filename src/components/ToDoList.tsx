import { useToDos } from "../contexts/todos.context";
import ToDo from "./ToDo";

function ToDoList() {
  const { toDos } = useToDos();
  return (
    <ul>
      {toDos.map((toDo) =>

        <li key={toDo.id}>
          {/* 
          html에서 이벤트는 이벤트 전파라는게 있슈. 
          *캡처링, 버블링 읽어보기
          stopPropagation
        */}
          <ToDo toDo={toDo} />
        </li>)}

    </ul>
  )
}

export default ToDoList