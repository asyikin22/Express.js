# Express.js
 
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






  
