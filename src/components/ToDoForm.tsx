import { ChangeEventHandler } from "react";

interface ToDoFormProps {
  title: string,
  content: string,
  handleChangeTitle: ChangeEventHandler<HTMLInputElement>;
  handleChangeContent: ChangeEventHandler<HTMLTextAreaElement>;
  handleClickAdd: () => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ title, content, handleChangeTitle, handleChangeContent, handleClickAdd }) => {
  return (
    <div>
      <input placeholder="title" onChange={handleChangeTitle} value={title} />
      <textarea placeholder="content" onChange={handleChangeContent} value={content} />
      <button onClick={handleClickAdd} >추가하기</button>
    </div>
  )
}

export default ToDoForm