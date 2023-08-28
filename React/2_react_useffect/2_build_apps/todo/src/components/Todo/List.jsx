import React from 'react';

function List(props) {
    const { tasksArr ,
        handleDelete
    } = props;
    return (
        <div className="list">
            {/* list */}
            <ul>
                {tasksArr.map((task, idx) => {
                    return <li
                        onClick={
                    () => {handleDelete(idx) }
                        }
                        key={idx}>{task}</li>
                })}
            </ul>
        </div>
    )
}

export default List