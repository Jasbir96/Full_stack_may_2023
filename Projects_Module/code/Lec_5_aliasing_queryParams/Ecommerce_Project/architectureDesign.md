Request -> **Api.js**
    if request starts from `/api/user`->    **userRouter**
    if request starts from `/api/product` ->   **ProductRouter**
    if any request does belong to above two -> **app.use in api.js**

**userRouter**
* depending upon your request either of the controller fn will be called
    **userController** 
* all of these CRUD function are build using Factory Design pattern
    GET / -> getAllUsers
    GET  /:userid-> getUserById
    POST / -> createUser
    DELETE /:userId -> deleteUserById
* Models -> schema for each of the resource
    **UserModel**
    **PlanModel**
    