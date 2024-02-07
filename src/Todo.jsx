// src/TodoList.js
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListTodo from "./components/ListTodo";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(null);
  return (
    <>
      <div className="max-w-md h-[502px] mx-auto mt-10 bg-slate-600 rounded-xl shadow-[10rem]">
        <div className="flex flex-col items-center justify-center">
          <Header />
        </div>
        <div className="mx-[4rem]">
          <Form
            input={input}
            setInput={setInput}
            todo={todo}
            setTodo={setTodo}
            edit={edit}
            setEdit={setEdit}
          />
          <ListTodo todos={todo} setTodos={setTodo} setEdit={setEdit}/>
        </div>
      </div>
    </>
  );
};

export default Todo;
