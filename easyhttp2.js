class easyHTTP2{

	//HTTP GET Request
	get(url){
		return new Promise((resolve,reject) => {
		fetch(url)
		.then(res => res.json())
		.then(data => resolve(data))
		.catch(err => reject(err));
		});
	}


	post(url,data){
		return new Promise((resolve,reject) => {
		fetch(url,{
			method: 'POST',
			headers: { 'Content-type': 'application/json'},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(data => resolve(data))
		.catch(err => reject(err));
		});
	}


	put(url,data){
		return new Promise((resolve,reject) => {
		fetch(url,{
			method: 'PUT',
			headers: { 'Content-type': 'application/json'},
			body: JSON.stringify(data)
		})
		.then(res => res.json())
		.then(data => resolve(data))
		.catch(err => reject(err));
		});
	}

	delete(url){
		return new Promise((resolve,reject) => {
		fetch(url,{
			method: 'DELETE',
			headers: { 'Content-type': 'application/json'},
		})
		.then(res => res.json())
		.then(() => resolve('Resource Deleted'))
		.catch(err => reject(err));
		});
	}

	patch(url,patchData){
		return new Promise((resolve,reject) => {
		fetch(url,{
			method: 'PATCH',
			headers: { 'Content-type': 'application/json; charset=UTF-8'},
			body: JSON.stringify(patchData)
		})
		.then(res => res.json())
		.then(data => resolve(data))
		.catch(err => reject(err));
		});	
	}


}