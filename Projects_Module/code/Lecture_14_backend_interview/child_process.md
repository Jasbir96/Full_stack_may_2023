#### Difference b/w spawn , fork ,exec and execFile
1. **` exec`:**
    - Executes a command in a shell (for example, Bash or Windows CMD).
    - It buffers the output and provides it when the process completes.
    - Best suited for short-lived processes that generate a small amount of data.
    - Useful for executing commands and getting the output back in a callback.
    - Not suitable for handling long-running processes or streaming large amounts of data due to the buffer limit.
2. **`execFile`:**
    - Similar to `exec`, but specifically for executing an executable file directly (as opposed to a command).
    - Allows specifying the file directly without going through a shell.
    - It’s generally more efficient than `exec` since it bypasses the shell.
3. **`spawn`:**
    - Launches a new process directly, without using a shell, providing control over input/output streams.
    - Ideal for long-running processes or those that generate large amounts of output.
    - Enables streaming of data between the Node.js process and the spawned process.
    - Allows better handling of large outputs without hitting buffer limits.
    - Good for running commands that continuously produce output (like server processes).
4.  **`fork`:**
    - Specifically designed for creating child Node.js processes.
    - It’s like `spawn` but with an IPC (Inter-Process Communication) channel set up automatically.
    - Mainly used for creating multiple instances of a Node.js application that can communicate with each other using messages.
    - Useful for implementing parallel processing in Node.js, splitting heavy tasks across multiple CPU cores.