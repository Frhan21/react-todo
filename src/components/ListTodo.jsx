import React from "react";

const ListTodo = ({ todos, setTodos, setEdit }) => {
  console.log(todos);
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo)
  }
  return (
    <div className="w-full">
      <ul>
        {todos.map((data, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 my-2 text-white border border-white rounded-lg text-md font-['Montserrat'] ${
              data.completed ? `line-through` : ``
            }`}
          >
            {data.title}
            <div className="flex items-center justify-center">
              <button
                className="mr-1 btn-circle btn btn-sm btn-success"
                onClick={() => handleComplete(data)}
              >
                <box-icon name="check" color='white'></box-icon>
              </button>
              <button
                className="mr-1 btn-circle btn btn-sm btn-error"
                onClick={() => handleDelete(data)}
              >
                <box-icon name="x" color='white'></box-icon>
              </button>
              <button
                className="mr-1 btn-circle btn btn-sm btn-warning"
                onClick={() => handleEdit(data)}
              >
                <box-icon name="edit-alt" color='white'></box-icon>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodo;
