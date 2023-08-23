import { useState } from 'react'

// import './App.css'

function App() {
  // you will never mutatae the state variable -> make a copy of it 
  const [tasksArr, setTasks] = useState([]);

  const addTask = (inputValue) => {
    const newTask = inputValue;
    // we will never mutate  a state variable on our own 
    let newTaskArr = [...tasksArr, newTask];
    setTasks(newTaskArr);
  }
  return (
    // react Fragments
    <>
      <InputBox addTask={addTask}></InputBox>
      <List tasksArr={tasksArr}></List>
    </>
  )
}

// rfce

function InputBox(props) {
  const [inputValue, setValue] = useState("");
  const handleInput = (e) => {
    setValue(e.target.value);
  }
  const addTaskChild = () => {
    props.addTask(inputValue);
    setValue("");
  }
  // we have provide acces to taskArr -> task ARR
  return (
    <div className="inputbox">
      <input type="text" value={inputValue}
        onChange={handleInput} />

      <button onClick={addTaskChild}>Add Task</button>
    </div>
  )
}

function List(props) {
  const { tasksArr } = props;
  return (
    <div className="list">
      {/* list */}
      <ul>
        {tasksArr.map((task) => {
          return <li>{task}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
