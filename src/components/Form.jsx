import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({
  input,
  setInput,
  todo,
  setTodo,
  edit,
  setEdit,
}) {
  console.log(input);
  const onInput = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = (title, id, completed) => {
  const newTodo = todo.map((data) =>
    data.id === id ? { title, id, completed } : data
  );
  setTodo(newTodo);
  setEdit("");
};
  const formSubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setTodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.completed);
    }
  };

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);
  return (
    <form onSubmit={formSubmit}>
      <input
        type="text"
        placeholder="Add List"
        className="px-1.5 py-1 input input-bordered"
        required
        value={input}
        onChange={onInput}
      />
      <button className="m-2 btn" type="submit">
        {edit ? "Update" : "Add"}
      </button>
    </form>
  );
}
