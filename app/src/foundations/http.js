const headers = {
	// Accept: 'application/json',
};

function get(url, opts) {
	let options = Object.assign({}, opts, {
		headers,
		credentials: 'include', // To support CORS requests,
	});

	return fetch(url, options)
		.then(resp => {
			return resp.json();
		});
}

function put(url, data, opts) {
	let options = Object.assign({}, opts, {
		method: 'PUT',
		json: data,
		headers,
		credentials: 'include',
	});

	return fetch(url, options)
		.then(resp => {
			return resp.json();
		});
}

module.exports = {
	get,
	put,
};

