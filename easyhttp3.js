class easyHTTP3{

	//HTTP GET Request
	async get(url){
		const response = await fetch(url);

		const reData = await response.json();
		return resData;
	}


	async post(url,data){
		const response = await fetch(url,{
			method: 'POST',
			headers: {'Content-type': 'application/json'},
			body: JSON.stringify(data)
		});

		const reData = await response.json();
		return resData;

		
	}


	put(url,data){
		const response = await fetch(url, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json'},
			body: JSON.stringify(data)
		});

		const resData = await response.json();
		return resData;
	}

	async delete(url){
		const response = await fetch(url,{
			method: 'DELETE',
			headers: { 'Content-type': 'application/json'},
		});
		const resData = await 'Resource Deleted';
		return resData;		
	}

	patch(url,patchData){
		const response = await fetch(url,{
			method: 'PATCH',
			headers: { 'Content-type': 'application/json; charset=UTF-8'},
			body: JSON.stringify(patchData)
		})
		const resData = await 'Data Patched';
		return resData;	
	}


}