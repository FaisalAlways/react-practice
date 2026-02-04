import { useState } from "react";
const TodoListView = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTodo, "<-- added to the list");
    setNewTodo("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Your Todo List</h2>

        {/* Form to add new todo */}
        <form className="flex gap-2 mb-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new todo"
            className="flex-1 border rounded-xs px-4 py-2 outline-none focus:none"
          />
          <button
            type="submit"
            className="bg-slate-800 text-white px-4 py-2 rounded-xs"
          >
            Add New Todo
          </button>
        </form>

        {/* Todo items */}
        <ul className="space-y-2">
          <li className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-xl"></li>
        </ul>
      </div>
    </div>
  );
};

export default TodoListView;
