import React, { useState, useEffect } from 'react'

function GetData() {

    const [data, setData] = useState(null);

    // hook -> given react 
    useEffect(
        function fn() {
            async function fetchData() {
                console.log("useEffect ran ");
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const user = await response.json();
                console.log(data);
                setData(user);
            }
            fetchData();
        }
        , [])
    console.log("Render");

    return (
        <>
            {data == null ?
                <h2>Placeholder loading the data....</h2> : <>
                    <h2>Name : {data.name}</h2>
                    <h2>Email : {data.email}</h2>
                    <h2>username : {data.username}</h2>
                </>
            }
        </>
    )
}

export default GetData