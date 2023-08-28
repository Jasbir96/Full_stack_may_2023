// rfce
import React, { useState } from 'react';
import InputBox from './inputBox';
import List from './List';

function Todo() {
    const [tasksArr, setTasks] = useState([]);
    const addTask = (inputValue) => {
        const newTask = inputValue;
        // we will never mutate  a state variable on our own 
        let newTaskArr = [...tasksArr, newTask];
        setTasks(newTaskArr);
    }
    const handleDelete = (idx) => {
        // console.log("handle Delete",idx);
        const filteredTasks = tasksArr.filter((task, cIdx) => {
            return cIdx != idx;
        })
        setTasks(filteredTasks);
    }

    return (
        // react Fragments
        <>
            <InputBox addTask={addTask}></InputBox>
            <List tasksArr={tasksArr}
                handleDelete={handleDelete}
            ></List>
        </>
    )
}

export default Todo