# simplyHTTP
Making HTTP requests simpler. Here are 3 classes 
easyHTTP,easyHTTP2,easyHTTP3 that use XHR, promises and async/await respectively.

You can use any class to make HTTP REQUESTS(GET,POST,PUT,DELETE,PATCH) to api.

How to use these classes is shown below:

## Using easyHTTP:

**1. Get Request:**
```php
const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts',
function(posts){
	console.log(posts);
});
```
**2. Post Request**
```php
const http = new easyHTTP;

const data = {
	title: 'Custom Post',
	body: 'This is body'
};

//POSTING DATA - New data will be created on server
http.post('https://jsonplaceholder.typicode.com/posts',data,
	function(post){
		console.log(post);
	});
  ```
**3. Put Request(Updating data on server)**
```php
const http = new easyHTTP;

const data = {
	title: 'Custom Post',
	body: 'This is body'
};

//PUT DATA - Updating data with id 1
http.put('https://jsonplaceholder.typicode.com/posts/1',data,
	function(post){
		console.log(post);
	});
  ```
**4. Delete Request**
```php
const http = new easyHTTP;

//DELETE DATA - Deleting data with id 1
http.delete('https://jsonplaceholder.typicode.com/posts/1',
function(response){
	console.log(response);
});
  ```
**5. Patch Request(A small patch on existing data)**
```php
const http = new easyHTTP;

const patchData = {
	body: 'This is a body patch'
}

//PATCH DATA - Updating data with id 1
http.patch('https://jsonplaceholder.typicode.com/posts/1',patchData,
	function(patch){
		console.log(patch);
	});
  ```
---------------------------------------------------------------------------------------------------------------------------

## Using easyHTTP2 or easyHTTP3:

Both classes will be used in the same way, only difference is that easyHTTP2 uses Promises while easyHTTP3 uses Async/Await

**1. Get Request:**
```php
const http = new easyHTTP2;//can also use easyHTTP3

http.get("https://jsonplaceholder.typicode.com/users")
	.then(data => console.log(data))
	.catch(err => console.log(err));
```
**2. Post Request**
```php
const http = new easyHTTP2;//can also use easyHTTP3

const data = {
	name: 'Arjit Sharma',
	username : "arjitsharma",
	email : "aj@gmail.com"
}

http.post('https://jsonplaceholder.typicode.com/users',data)
	.then(data => console.log(data))
	.catch(err => console.log(err));
  ```
**3. Put Request(Updating data on server)**
```php
const http = new easyHTTP2;//can also use easyHTTP3

const data = {
	name: 'Arjit Sharma',
	username : "arjitsharma",
	email : "aj@gmail.com"
}

http.put('https://jsonplaceholder.typicode.com/users/2',data)
	.then(data => console.log(data))
	.catch(err => console.log(err));
  ```
**4. Delete Request**
```php
const http = new easyHTTP2;//can also use easyHTTP3

http.delete('https://jsonplaceholder.typicode.com/users/2')
	.then(data => console.log(data))
	.catch(err => console.log(err));
});
  ```
**5. Patch Request(A small patch on existing data)**
```php
const http = new easyHTTP2;//can also use easyHTTP3

const patchData = {
	name: 'Rohan Shey'
}
http.patch('https://jsonplaceholder.typicode.com/users/2',patchData)
	.then(data => console.log(data))
	.catch(err => console.log(err));
  ```
----------------------------------------------------------------------------------------------------------------------
Referrence - This library was built using [Brad Traversy's Course](https://www.udemy.com/course/modern-javascript-from-the-beginning/).
