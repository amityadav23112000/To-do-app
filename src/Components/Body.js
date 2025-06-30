import { useState } from "react";

const Body = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  const handleSubmit = (e) => {
     e.preventDefault();
    if (task.trim() === "") return;
    setTasks([...tasks, task.trim()]);
    setTask("");
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleEditSubmit = (index) => {
    if (editedTask.trim() === "") return;
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditedTask("");
  };

  return (
    <div className="body-container">
      <div className="todo-container">
        <h2 className="todo-title">To-Do List</h2>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a new task"
            className="todo-input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button type="submit" className="todo-button">
            Add
          </button>
        </form>

        <ul className="todo-list">
          {tasks.map((item, index) => (
            <li key={index} className="todo-item">
              {editIndex === index ? (
                <>
                  <input
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    className="todo-input edit-input"
                  />
                  <button
                    onClick={() => handleEditSubmit(index)}
                    className="todo-button small"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span>{item}</span>
                  <button
                    onClick={() => handleEdit(index)}
                    className="todo-button small edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="todo-button small delete-btn"
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Body;
