// 1. 만든다

import { createContext, useContext, useState } from "react";
import { ToDo } from "../types/toDo.type";



type ToDosContextType = {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const initialValue: ToDosContextType = { toDos: [], setToDos: () => { } }


const ToDosContext = createContext(initialValue);

//2.사용한다
export const useToDos = () => useContext(ToDosContext);

//3. 범윚 ㅓㅇ해서 내려주기

interface ToDosProviderProps {
  children: React.ReactNode;
}
// props는 객체일세
export function ToDosProvider({ children }: ToDosProviderProps) {
  const [toDos, setToDos] = useState<ToDo[]>([])
  return (
    <ToDosContext.Provider value={{ toDos, setToDos }}>{children}</ToDosContext.Provider>
  )
}

