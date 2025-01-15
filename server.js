const net = require('net');

// Define the RPC methods
const rpcMethods = {
    factorial(n) {
        if (n < 0) return "Invalid input";
        return n === 0 || n === 1 ? 1 : n * this.factorial(n - 1);
    },
    square(n) {
        return n * n;
    },
    greet(name) {
        return `Hello, ${name}!`;
    }
};

// Create a server to handle RPC requests
const server = net.createServer(socket => {
    socket.on('data', data => {
        try {
            const { method, args } = JSON.parse(data.toString());
            if (rpcMethods[method]) {
                const result = rpcMethods[method](...args);
                socket.write(JSON.stringify({ result }));
            } else {
                socket.write(JSON.stringify({ error: "Method not found" }));
            }
        } catch (err) {
            socket.write(JSON.stringify({ error: "Invalid request format" }));
        }
    });
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`RPC server running on port ${PORT}`);
});
