import React from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setInterval(() => {
            // console.log(count)

            //It is always better to use you useState with cb  when you are updating 
            // with the help of a previous of a state
            setCount((count) => { return count + 1 });
            // setCount(count+1)
        }, 1000)
    }


    return (
        <>
            <h3>{count}</h3>
            <button onClick={handleCount}>Increment</button>
        </>
    )
}

export default Counter