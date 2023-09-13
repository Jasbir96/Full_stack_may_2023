import { useState, useCallback } from "react";
import ListItems from "./ListItems";
import CounterClass from "./CounterClass";
const UseCallbackConcept = () => {
    const [items, setItems] = useState(
        [
            { id: '1', name: 'item 1' },
            { id: '2', name: 'item 2' },
            { id: '3', name: 'item 3' },
        ]
    );
    const [count, setCOunt] = useState(0);

    const deletingItem = (itemId) => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    }

    const handleDelete = useCallback(((itemId) => {
        deletingItem(itemId);
    }), [items]);
    const handdleIncrement = () => {

    }
    const handledecrement = () => {

    }
    return (
        <>
            <h2>Your list items</h2>
            <CounterClass handdleIncrement={handdleIncrement} handledecrement={handledecrement}></CounterClass>
            <ListItems items={items} handleDelete={handleDelete} />
        </>
    )

}

export default UseCallbackConcept;