function calculateFibonacci(number) {
    if (number <= 1) {
        return number;
    }
    return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
}

// process is a global -> spawn/fork
process.on('message', ({ number }) => {
    const result = calculateFibonacci(number);
    process.send(result);
});