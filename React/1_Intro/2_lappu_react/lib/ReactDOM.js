let ReactDOM = {};
function render(component, root) {
    let OptimizedDOM = react(component);
    console.log("Rendering to DOM");
    // it puts into the root element
    root.innerHTML = OptimizedDOM;
}
ReactDOM.render = render;
