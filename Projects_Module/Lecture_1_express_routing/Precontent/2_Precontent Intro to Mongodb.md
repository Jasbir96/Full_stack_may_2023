
## Req-Res cycle of a simple request  
<img src="./two.png">
Usually when a user visits a website ->to get some data. It makes the http request by clicking on a button or by doing some other action . A request will be send to a backend server and then the server will search the content related to the request and return the resp.

**Problem** :  In a production level server there is a lot of data that is stored for example Amazon has 2 million plus products and store data and all the assets in the same server is not possible . 
**Solution** : First two steps that everyone takes solve it are
* Having a special software whose task is work with data efficiently . Also can provide features related to data like validation , access management and other features specific to a particular use-case : for this we can use **Data base management system : DBMS**. [To know more](https://byjus.com/commerce/concept-and-features-of-dbms/) 
* Now to further scale them we can have a different server just for the DBMS.
so in today's lecture we will  see how to perform these two steps 
#### Now for starters our setup will look like this 
<img src="./one.png">

## Important Terms
* Connection : We usually need to form a connection from server to DB before we can do anything . 
* Entity: on a logical level we  segregate our data in different real world categories 
	* ex: in Amazon : I can have -> user , products , bookings, reviews , 
* Schema : is the structure and a set of rules that an entity need to follow at every point of time .
* CRUD operations in DB : You can do 4 types of operation on a particular data    
	* Create
	* Read 
	* Update 
	* Delete 
* Query : It is a command that we give to our DBMS to carry out a certain task also we can add some filters while giving these commands
	* Ex :  get all the users from our DB who have average spending greater then 12k$ -> to carry out this task we will write set of instruction those instructions are known as query  
## Env Variables 
There are certain things like
* DB password ,username 
* PORT Number
* API keys
that are used to run your server and should always be kept private. To achieve the privacy they are added to **env file** and that file is kept hidden so that others can't access it . 
In today's class we will look into it how to achieve this
