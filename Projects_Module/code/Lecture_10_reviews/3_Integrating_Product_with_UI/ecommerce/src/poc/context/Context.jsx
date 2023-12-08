import React, { useContext } from 'react';
// 1
const ContextWrapper = React.createContext();
function Context() {
    return (
        //2
        <ContextWrapper.Provider value="Be safe">
            <GrandParent></GrandParent>
        </ContextWrapper.Provider>
    )
}

function GrandParent() {
    return <>
        <h2>GrandParent</h2>
        <div>⬇</div>
        <Parent></Parent>
    </>
}

function Parent() {
    return <>
        <h2>Parent</h2>
        <div>⬇</div>
        <Children></Children>
    </>
}
function Children() {
    const message = useContext(ContextWrapper);
    return <>
        <h2> Children</h2>
        <div>⬇</div>
        <div>{message}</div>
    </>
}


export default Context