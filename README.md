# **RPC App**

A simple client-server application built using Remote Procedure Call (RPC) in Node.js. The client sends method invocation requests to the server, and the server processes the requests and returns the results.

---

## **Features**
- Invoke remote methods such as `factorial`, `square`, and `greet`.
- Simple and extensible codebase.
- Demonstrates the use of Node.js `net` module for TCP communication.

---

## **Project Structure**
```
rpc-app/
├── client.js       # Client-side implementation
├── server.js       # Server-side implementation
├── package.json    # Project metadata and dependencies
└── README.md       # Documentation
```

---

## **Prerequisites**
- Node.js installed on your system.
- Basic understanding of Node.js and TCP communication.

---

## **Setup Instructions**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AmitRoy01/RPC-app.git
   cd rpc-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Server**
   Open a terminal and run:
   ```bash
   npm run start-server
   ```
   The server will start and listen on port `5000`.

4. **Run the Client**
   Open another terminal and run:
   ```bash
   npm run start-client
   ```

---

## **Usage**
The client will make the following RPC calls:
- **Factorial of 4:** Calculates and prints the result.
- **Square of 5:** Calculates and prints the result.
- **Greet 'Amit':** Prints a greeting message.

**Example Output:**
```
Factorial(4): 24
Square(5): 25
Greet('Amit'): Hello, Amit!
```

---

## **Extending the Application**
1. Add more methods in the `rpcMethods` object in `server.js`.
2. Update the client code (`client.js`) to call these new methods.

---

## **Contributing**
Feel free to fork the repository, make improvements, and submit a pull request. Contributions are welcome!

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**
- [Node.js Documentation](https://nodejs.org/en/docs/)
- Inspiration from building simple RPC systems. 

