import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTask, editTask } from "./features/CardsSlice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { MdDataSaverOn } from "react-icons/md";

function App() {
  const [text, setText] = useState("");
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const deleteTasks = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id, currentText) => {
    setEditingId(id);
    setEditText(currentText);
  };

  const handleSaveEdit = () => {
    if (editText.trim()) {
      dispatch(editTask({ id: editingId, text: editText }));
      setEditingId(null);
      setEditText("");
    }
  };
  return (
    <>
      <div className="card-add">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input-add"
        />
        <button onClick={handleAdd} className="btn btn-add">
          {" "}
          <IoIosAddCircle style={{ fontSize: "30px" }} />
        </button>
      </div>


      
      <div className="todos">
        {" "}
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="input-edit"
                />
                <button onClick={handleSaveEdit} className="btn btn-save">
                  <MdDataSaverOn style={{ fontSize: "24px" }} />
                </button>
              </>
            ) : (
              <>
                <div className="task">
                  {todo.text.length > 40
                    ? todo.text.slice(0, 40) + "..."
                    : todo.text}
                </div>
                <button
                  className="btn btn-edit"
                  onClick={() => handleEdit(todo.id, todo.text)}
                >
                  <FaEdit style={{ fontSize: "24px" }} />
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() => deleteTasks(todo.id)}
                >
                  {" "}
                  <MdDelete style={{ fontSize: "24px" }} />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
