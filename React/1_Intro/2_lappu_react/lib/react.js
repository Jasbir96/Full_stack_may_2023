function react(component) {
    // calling that fn
    let dom = component();
    console.log("....optimizing changes");
    return dom;
}