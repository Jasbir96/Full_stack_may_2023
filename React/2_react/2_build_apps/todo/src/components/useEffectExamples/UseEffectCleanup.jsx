import React, { useState, useEffect } from 'react';

function UseEffectCleanup() {
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

    // function firstCb() {
    //     console.log("first useEffect");
    // }
    function secondCb() {
        console.log("second useEffect");
        return function () {
            console.log("cleanup for useffect without dependency array");
        }
    }
    // function thirdCb() {
    //     console.log("third useEffect");
    //     return function () {
    //         console.log("cleanup for useffect with TaskList Dependency");
    //     }
    // }
    // 1st version -> only it's cb fn only once after first render
    // useEffect(firstCb, []);
    /**
     * 2nd version -> it's cb fn is called after every render and re-render
     * cleanup fn : it is called just before the next useEFFECT call
    */

    useEffect(secondCb);
    /**
     * 3rd version -> 
     * it's cb fn is called after render and after the element changes it's value inside  the dependecy array
    * cleanup fn : it is called just before the next useEFFECT call
     * */
    // useEffect(thirdCb, [taskList]);
    console.log("render");

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
    function firstCb() {
        console.log("first useEffect");
        return function () {
            console.log("Cleanup called for empty depedency");
        }
    }
    useEffect(firstCb, []);
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
export default UseEffectCleanup;

/***
 * UseEffect -> to be called after render
 * 1. cb is called once in the liftime -> useffect(fn,[])
 *      cleanup -> after component is removed from UI
 *      usecase : on page first Load data fetaching  
 * 2. cb is called n number of time in the liftime -> useEffect (fn);
 *      usecase : autosave 5sec 
 *          cleanup -> before next Useffect call
 * 3. cb is called if dependecy updates number of time in the liftime -> useEffect (fn,[dp1,dep2])
 *          cleanup -> before next Useffect call
 *          usecase : 
 * 
 
 * */ 