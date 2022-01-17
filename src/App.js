import { useState, useRef } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const taskInput = useRef(null);

  const addTask = () => {
    if (taskInput.current.value === "") {
      return;
    }

    setTasks([...tasks, taskInput.current.value]);
    taskInput.current.value = "";
  };

  const addOnEnter = e => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const removeTask = task => setTasks(tasks.filter(item => item !== task));

  const list = tasks.map(task => (
    <li key={task}>
      <span>{task}</span>
      <button onClick={() => removeTask(task)}>Remove</button>
    </li>
  ));

  return (
    <>
      <header>
        <h1>To Do</h1>
      </header>
      <main>
        <section>
          <input type="text" placeholder="Enter task" ref={taskInput} onKeyUp={addOnEnter} />
          <button onClick={addTask}>Add</button>
        </section>
        <section>
          <ul>{list}</ul>
        </section>
      </main>
    </>
  );
}

export default App;
