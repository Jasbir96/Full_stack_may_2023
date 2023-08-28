import React, { useState, useEffect } from 'react';

function UseEffectExamples() {
    const [value, setValue] = useState("");
    const [taskList, setTaskList] = useState([]);
    const setTask = function () {
        // /
        let newTaskList = [...taskList];
        newTaskList.push({
            id: Date.now(),
            task: value
        })
        setTaskList(newTaskList);
        setValue("");
    }
    const removeTask = function (id) {
        let restOftasks = taskList.filter(function (taskObject) {
            return taskObject.id != id;
        })
        setTaskList(restOftasks);
    }

    function firstCb() {
        console.log("first useEffect");
    }
    function secondCb() {
        console.log("second useEffect");
    }
    function thirdCb() {
        console.log("third useEffect");
    }
    // 1st version -> only it's cb fn only once after first render
    // useEffect(firstCb, []);

    // 2nd version -> it's cb fn is called after every render and re-render
    // useEffect(secondCb);
    // 3rd version -> it's cb fn is called after render and after the element changes it's value 
    // inside  the dependecy array
    // useEffect(thirdCb, [taskList]);
    // console.log("render");

    return (
        <>
            <div>
                {/* input */}
                <input type="text" placeholder="Input Task" value={value}
                    onChange={(e) => { setValue(e.target.value) }}></input>
                <button onClick={setTask}>Add Task </button>
            </div>

            {/* list  */}
            {taskList.map((taskObj) => {
                return (
                    <Task key={taskObj.id} id={taskObj.id} task={taskObj.task}
                        removeTask={removeTask}></Task>)
            })}
        </>
    )
}
function Task(props) {
    let { id, task, removeTask } = props;
    return (
        <li
            onClick={() => {
                removeTask(id)
            }}
        >
            {task}
        </li>
    )
}
export default UseEffectExamples;