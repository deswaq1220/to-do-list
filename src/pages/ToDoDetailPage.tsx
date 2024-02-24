import { useParams } from "react-router-dom";
import { useToDos } from "../contexts/todos.context";

function ToDoDetailPage() {
  const params = useParams();
  const toDoId = params.toDoId;
  const { toDos } = useToDos();

  if (toDoId === undefined) return <div>toDoId를 잘못 입력함.</div>

  const toDo = toDos.find(_toDo_ => _toDo_.id === Number(toDoId));
  // todo앞에 언더스코어 붙인이유? -> 이름 같은게 싫어성~
  if (toDo === undefined) return <div> toDo가 없음 이슈</div>
  return (
    <div>
      <h1>{toDo.title}</h1>
      <p>{toDo.content}</p>
      <div>{toDo.isComplete ? "완료" : "미완로"}</div>
    </div>
  )
}

export default ToDoDetailPage