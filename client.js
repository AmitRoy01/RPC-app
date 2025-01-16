const net = require('net');

function callRPCMethod(method, args) {
    return new Promise((resolve, reject) => {
        const client = net.createConnection({ port: 5000 }, () => {
            const request = JSON.stringify({ method, args });
            client.write(request);
        });

        client.on('data', data => {
            const response = JSON.parse(data.toString());
            client.end();

            if (response.result !== undefined) {
                resolve(response.result);
            } else {
                reject(response.error || "Unknown error");
            }
        });

        client.on('error', err => {
            reject(err.message);
        });
    });
}

(async () => {
    try {
        const result1 = await callRPCMethod("factorial", [4]);
        console.log("Factorial(4):", result1);

        const result2 = await callRPCMethod("square", [5]);
        console.log("Square(5):", result2);

        const result3 = await callRPCMethod("greet", ["Amit"]);
        console.log("Greet('Amit'):", result3);
    } catch (error) {
        console.error("Error:", error);
    }
})();
