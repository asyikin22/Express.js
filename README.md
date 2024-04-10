﻿# Express.js
 
Port: https://en.wikipedia.org/wiki/Port_(computer_networking)
* Port is a communication end point and to direct data to a specific service
  
![image](https://github.com/asyikin22/Express.js/assets/148519441/9d0c649c-4b36-4789-a8a9-20563e57a4ba)

# HTTP BASICS

![image](https://github.com/asyikin22/Express.js/assets/148519441/5645810d-c249-4a99-926f-c9e04eb5baab)

**NOTE**:
* Nothing comes up on browser even though users performed multiple request (user hit the server)
* We need to send some response to the browser otherwise nothing will happen
* This will be domsntrated in the next sub-topic

**STEP BY STEP**
* Server is  run locally in my computer and I'll be able to access it through a given port.
* First: Load the http package into the script.
* Create a createServer method, store it in const variable.Pass a callback function into create server with 2 parameters, req and res
* Specify port number (i.e. 5000) - Store it in a variable
* Use method 'server.listen' to make sure it's up and running

**res.end()**
* Link: https://nodejs.org/docs/v20.11.1/api/http.html#responseenddata-encoding-callback
* This method signals to the server that all of the response headers and body have been sent;
* that server should consider this message complete.
* The method, response.end(), MUST be called on each response.
* We can either send text or HTML

![image](https://github.com/asyikin22/Express.js/assets/148519441/f60ff044-4e9f-4ba4-81e0-b5535d3d2d40)

**SUMMARY**
* Get access to built-in HTTP module
* Set up a variable, calling it HTTP
* Create a server method  that takes in a callback which will be invoked every time the use hits server
* The parameters:
    1) request object - request message that's coming in where we can find useful info about incoming request
    2) response object - respond the browser in meaningful manner
* Res object should always have res.end to signal that the communication is over
* Set up port.
* Pass in listen() method that is available when we invoke create server because we get back the object

  
