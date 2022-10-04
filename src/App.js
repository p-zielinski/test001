import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addNewTask,
  deleteTask,
  reverseStatusOfTask,
} from "./store/taskActions";

function App() {
  const [newTaskText, setNewTaskText] = useState("");
  const dispatch = useDispatch();
  const { allTasks } = useSelector((state) => state.tasks);

  return (
    <div className="App">
      new task{" "}
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(addNewTask(newTaskText));
          setNewTaskText("");
        }}
      >
        submit
      </button>
      {allTasks.map((task, index) => (
        <>
          <br />
          {task.whatTodo}, status:{task.status ? "DONE" : "NOT DONE"}
          <button onClick={() => dispatch(reverseStatusOfTask(index))}>
            {!task.status ? "DONE" : "NOT DONE"}
          </button>
          <button onClick={() => dispatch(deleteTask(index))}>DELETE</button>
        </>
      ))}
    </div>
  );
}

export default App;
