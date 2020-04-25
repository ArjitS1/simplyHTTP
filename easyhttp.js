//ES5 OO library

function easyHTTP(){
	this.http = new XMLHttpRequest();
}

//HTTP GET Request
//Done asynchronously using callback
easyHTTP.prototype.get = function(url, callback){
	this.http.open('GET',url,true);

	let self = this;//self used coz cant use this in function
	this.http.onload = function(){
		if(self.http.status === 200){
			callback(self.http.responseText);
		}
	}

	this.http.send();
	
}


//HTTP POST Request
easyHTTP.prototype.post = function(url,data,callback){
	this.http.open('POST',url,true);
	this.http.setRequestHeader('Content-type','application/json');


	let self = this;//self used coz cant use this in function
	this.http.onload = function(){
			callback(self.http.responseText);
	}


	this.http.send(JSON.stringify(data));
}



//HTTP PUT Request
easyHTTP.prototype.put = function(url,data,callback){
	this.http.open('PUT',url,true);
	this.http.setRequestHeader('Content-type','application/json');


	let self = this;//self used coz cant use this in function
	this.http.onload = function(){
			callback(self.http.responseText);
	}


	this.http.send(JSON.stringify(data));
}



//HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
	this.http.open('DELETE',url,true);

	let self = this;
	this.http.onload = function(){
		if(self.http.status === 200){
			callback('POST DELETED');
		}
	}

	this.http.send();
	
}


easyHTTP.prototype.patch = function(url,data,callback){
	this.http.open('PATCH',url,true);
	this.http.setRequestHeader('Content-type','application/json');


	let self = this;//self used coz cant use this in function
	this.http.onload = function(){
			callback(self.http.responseText);
	}


	this.http.send(JSON.stringify(data));
}