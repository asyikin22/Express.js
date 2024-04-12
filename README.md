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

# HTTP - HEADERS

**The problem with previous codes**:
* We did not provide any info about the data we're sending back, we don’t have any metadata about the body we are sending out
* If we type in 'about' or 'contact' the same response will be sent back every time.

**Provide more info using res.writeHead**:
* Provide headers, metadata about response.
* Provide a status code: 200
* Pass in headers: key-value pair
* Set up html using res.write

![image](https://github.com/asyikin22/Express.js/assets/148519441/4c987a29-5708-4bec-995c-7c0461a0933f)

**STATUS CODE**:
* MDN Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
* HTTP response status codes indicate whether a specific HTTP request has been successfully completed.
* We have to attach the status code to let the browser know what's happening

![image](https://github.com/asyikin22/Express.js/assets/148519441/cc081300-6594-4b53-99b5-4aafd1b37db7)

**MIME TYPES (Media type):**
* MDN Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
* A media type (also known as a Multipurpose Internet Mail Extensions or MIME type)
* It indicates the nature and format of a document, file, or assortment of bytes to the browser
* Express.js will take care of this, there's no need to memorize them.

# HTTP - REQUEST OBJECT

**Logging HTTP method using req.method (Line 4)**:
* Every time user hits the server, the method GET will be logged to the terminal
* We can also see the method on dev tool which specifies the method as GET
  
![image](https://github.com/asyikin22/Express.js/assets/148519441/b0c4f369-0174-4b4e-b9c8-0b700f039942)

**Logging the URL of the incoming HTTP request using req.url method (Line 5)**:
* This allows you to inspect the URLs being requested from your server
* When a client sends a request to server, it includes various pieces of info including  the URL
* For example, if you access http://localhost:5000/about, the URL of the request would '/about'
* In the below example, we can see /contact and /about are include in the URL.
* '/' is the homepage, whatever comes after that is the resource users are trying to access

![image](https://github.com/asyikin22/Express.js/assets/148519441/c5134d26-da8f-49c5-9738-0481e2579dac)

**USING IF STATEMENT TO DETERMINE RESPONSE**:
* Used to determine the appropriate response based on the requested URL
* Depending on the URL, the server sends different content and status codes in the response

![image](https://github.com/asyikin22/Express.js/assets/148519441/7d5ddf3f-dcb6-4872-8c3c-b5dabe24b983)

**USING 'READFILESYNC' TO READ FILE CONTENT**
* Note that if you change text/html to text/plain, it will display the HTML structure of the file instead of words
  
![image](https://github.com/asyikin22/Express.js/assets/148519441/7d26856d-2ba9-4d92-8510-fca67932d44c)

# EXPRESS.JS BASICS

**DEFINITION**:

* Minimal and flexible node.js web app framework designed to make developing web apps and APIs faster and easier
* Link: https://expressjs.com/
   1. Web application framework for Node.js
   2. It's designed for web building applications and APIs
   3. It provides a minimalist & flexible set of features for web and mobile apps
 
 **EXPRESS BASICS**
 
 ![image](https://github.com/asyikin22/Express.js/assets/148519441/638cd749-18c3-47b2-a929-842c16608974)

 **STATIC FILES**:
* Files that are served directly to the client without being processed by the server
* Server doesn’t have to change them.
* Common type:
  
![image](https://github.com/asyikin22/Express.js/assets/148519441/092da4ec-3cf1-46e1-80a3-16876e01bf37)

**Common folder Names for static files**:

![image](https://github.com/asyikin22/Express.js/assets/148519441/c904ee4e-f521-42a2-af4f-a98845342ea5)

**Setting up static and middleware using express.static**:
* 	We don’t have to create HTTP url for every resource, express will take care of it
* 	It will set up the path, MIME types and status code

![image](https://github.com/asyikin22/Express.js/assets/148519441/12c7daf8-831a-4f18-9cc1-8d328b7bc297)

# BASIC JSON

**BASIC PRINCIPLES IN CREATING API USING EXPRESS.JS**
* Define routes
* Handle HTTP methods
* Format data
* Listen for incoming request.

![image](https://github.com/asyikin22/Express.js/assets/148519441/366958c6-c896-4ddf-873e-cc0fa8dd3668)

**Initialize the server and preparing it to handle incoming requests**:
![image](https://github.com/asyikin22/Express.js/assets/148519441/103729b3-c5c7-422f-845b-595150bd01ed)

**EXAMPLE 1 - BUILDING THE MOST BASIC API: Using res.json**

![image](https://github.com/asyikin22/Express.js/assets/148519441/3c755dd3-fd34-4985-8ac6-da80df25035f)

**EXAMPLE 2 - USING LARGER AND MEANINGFUL DATA**
* I have created a file containing arrays of users and their information. I copied the data from here: https://jsonplaceholder.typicode.com/users
* The file is named 'data.js' in the repo
* I am going to import user array from data.js into my main file.
* Example below shows the JSON response (snapshot of 1 out of 10 users)

![image](https://github.com/asyikin22/Express.js/assets/148519441/da0c5be2-a007-4284-8158-3d76be3d5ca5)


# PARAM, QUERY STRING

**Setting up two routes using Express.js**

![image](https://github.com/asyikin22/Express.js/assets/148519441/33f392a7-a6f4-4c76-9a3e-0a804cca16f2)

![image](https://github.com/asyikin22/Express.js/assets/148519441/37b622a5-7bb0-49f8-b944-d323dc04a0f2)

**SETTING UP GET REQUEST TO A SPECIFIC ENDPOINT (USER WITH ID:1)**

![image](https://github.com/asyikin22/Express.js/assets/148519441/5f7b889a-b437-4ce0-8311-cea7f019c2c8)

**ROUTE PARAMETER & QUERY STRING**

![image](https://github.com/asyikin22/Express.js/assets/148519441/912b0e05-0ce9-4c33-9323-c4e4443d037c)

**SETTING UP ROUTE PARAMETERS FOR BIG DATA**
* With this code, I can find any user with ID from 1 to 10 without setting an individual end point in the route parameter
* I can handle request for users ID using a single route handler

![image](https://github.com/asyikin22/Express.js/assets/148519441/2b172ec8-ca3b-49fe-8612-c8778c629bcb)

**NOTE:UNFINISHED**

# MIDDLEWARE 

**PURPOSE**:
* Functions that execute during the request to the server
* Each middleware function has access to request and response object
* It's everywhere in express.

**BASIC DEMONSTRATION**
* This route handler demonstrates how middleware can be used to handle incoming requests and performs tasks
* It intercepts incoming GET request to the root URL and perform some operations
  1)  Logging to consoles (Method, url, time (year))
  2)  Sending response to client
* Middleware functions in Express have access to req and res objects allowing them to modify the request and response as needed
  
![image](https://github.com/asyikin22/Express.js/assets/148519441/06f321f6-6672-4d97-9f16-3e7e4548708c)

![image](https://github.com/asyikin22/Express.js/assets/148519441/7673701b-ec21-4ab4-9235-e379910b3342)

**Create separate middleware function to promote modularity, reusability and maintainability**:

![image](https://github.com/asyikin22/Express.js/assets/148519441/800b4775-bfdf-41d4-9353-d8f182f5cec2)

![image](https://github.com/asyikin22/Express.js/assets/148519441/c37043e4-8b35-4200-9208-5abe2344d02d)

**How to use 'use()' function as a method in Express application instance**
* I am using the previous code as an example
* But this time I created separate files named logger.js and authorize.js and export the module to the main file 07
* This lines of code sets up an Express application (app)
* It imports a customer middleware function (logger) from logger.js file
* It adds the logger and authorize middleware to the express application using app.use() method
* It allows the logger and authorize middleware to intercept incoming requests and perform logging task before passing control to the subsequent middleware or route handlers

![image](https://github.com/asyikin22/Express.js/assets/148519441/0eb638b8-c0f6-43cd-b7e4-9088a133f3f7)























  
