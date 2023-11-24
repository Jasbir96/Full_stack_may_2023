### Key Principles of RESTful APIs

1. **Client-Server Separation of **:
- Clear separation between client and server responsibilities.
- Clients handle the user interface, while servers manage data storage and processing.

<!-- Ecommerce Website 
* Users
* Products
* Reviews
* Booking 
* Returns 
 -->
 app.get("/getUser") -> app.get("/user")
 app.get("/reviewforIphone14") -> app.get("/review/iphone14)
2. **Resource-Based Routing**:
- Data is exposed as resources (e.g., `/users`, `/products`).
- Each resource is uniquely identified by a route.

3.  **Actions are done by HTTP method** 
- **GET**: Retrieve a resource.
- **POST**: Create a new resource.
- **PATCH**: Update an existing resource.
- **DELETE**: Delete a resource.

app.get("/nextPage") -> app.get("/5")
 4. **Statelessness**:
- Each request from the client to the server must contain all the necessary information for the server to fulfil it .
- The server doesn’t store any client state between requests. Every request is independent.simplifying scalability and reducing coupling.


### Benefits 
* **Scalability**: REST APIs are scalable and can handle a large number of clients.
* **Simplicity**: Easy to understand and use due to the use of standard HTTP methods and URLs.
* **Independence** : tech stack of client/server 