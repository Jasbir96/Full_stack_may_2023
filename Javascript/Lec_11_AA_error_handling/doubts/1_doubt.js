const a = (async function () {
    return await Promise.resolve('ankit')
})()
console.log(a);
a.then(function (data) {
    console.log(data);
})
// Error: await is only valid in async functions and the top level bodies of modules why above error ?