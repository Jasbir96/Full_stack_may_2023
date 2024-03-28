**HTTP packet**
* Header : metadata about the packet
* cookies -> part of header 
* Body : contains actual data that is being

## cookies
* cookie is a client side storage
* It stores data in the format `key : value` pairs . These pair should be of type string
* Server sends these cookies to the client 
* on the client side these cookies are stored and mapped to the server that has send the cookies
* For next request -> client will automatically share this cookie with the server
### Learning : 
* used to share some data to the client that server can access later to personalize the experience 

## Identification vs Authentication vs Authorization 

**Identification** : Identification is the process of stating or claiming who you are. It's the initial step where a user asserts an identity, but it doesn't validate the authenticity of the claim. : 
* User perferences are solved 

* **Authentication**: is the process of verifying whether the claimed identity is valid and accurate.It ensures that the user's identity is genuine before granting access to protected resources or functionalities. 
    * login ,otp , bometric 
    * web tokens -> if that token  is secure 

* **Authorization** is the process of determining what actions or resources an authenticated user is permitted to access within a system or application.


## JSON web token 

* To prevent tampering
1. JSON token creation :
JSON web token is built out of three component
    * `Payload` : plain text (identifier for the user)  
    * `Algorithm`: in plain text name of the algorithm
    * `signature`: encryped text that is build using ecrypting  three texts
        * payload+ algorithm name+ secret key 
2. Secret key is only known by the server
3. validation 
         a. server takes -> payload from incoming token + algorithm from incoming token + secret from the server and builds a fresh signature 
         b. compare  signature of incoming token and signature that is build in the above step
         c. validation fails if signature coming from the client does not match with freshley prepared signature

* To prevent access -> httpOnly 





