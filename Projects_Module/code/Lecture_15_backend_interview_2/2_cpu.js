/***
 * CPU intensive taks : 
 * * cpu processing : image procsessing , creating files 
 * * Solution : spin up a new process (child_process, cluster)
 * 
 * */

const express = require('express');
const cors = require('cors');
const app = express();
const { fork } = require("child_process");
const path = require('path');
// serial and parallel
app.use(cors());
app.get('/fib', (req, res) => {
    const { number } = req.query;
    console.log("handler fn ran from req")
    if (!number || isNaN(number) || number <= 0) {
        return res.status(400).json({ error: 'Please provide a valid positive number.' });
    }
    // const answer = calculateFibonacci(number);
    // creation of a thread for fib worker
    const fibonacciWorker = fork(path.join(__dirname,
        'fibworker.js'));
    // sending the input -> using event
    fibonacciWorker.send({ number: parseInt(number, 10) });
    // listeneer to accept the result 
    
    fibonacciWorker.on("message", function (answer) {
        // console.log(answer);
        // only then response is send 
        res.status(200).json({
            status: "success",
            message: answer
        })
        // a thread will be destroyed 
        fibonacciWorker.kill();
    })
    // if there is some error
    fibonacciWorker.on('error', (err) => {
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    });

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});