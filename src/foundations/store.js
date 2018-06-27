const toystore = require('toystore');
const toystoreReact = require('toystore-react');

const keys = {
	pages: {
		app: _defaultAsyncData([]),
	}
};

let store = toystore.create(keys);

store.asyncSet = function (key, dataPromise) {
	let storeData = store.get(key);

	storeData.isLoading = true;
	storeData.isBlankState = _isBlank(storeData);
	storeData.isError = false;

	dataPromise.then(data => {
		storeData.data = data;
		storeData.isLoading = false;
		storeData.isBlankState = _isBlank(data);

		store.set(key, storeData);
	}).catch(data => {
		storeData.data = data;
		storeData.isLoading = false;
		storeData.isBlankState = _isBlank(data);
		storeData.isError = true;

		store.set(key, storeData);
	});

	//do stuff
	store.set(key, storeData);
};

function _defaultAsyncData(data, isLoading = false, isError = false) {
	let isBlankState = _isBlank(data);

	return {
		data,
		isBlankState,
		isError,
	}
}

function _isBlank(data) {
	return data === undefined || data === null || data && data.length === 0;
}

store.keys = keys;

// Use partial application to add the 'subscribe' method from toystore-react, bound to this store
store.subscribe = (Component, mapping) => toystoreReact.subscribe(store, Component, mapping);

module.exports = store;
