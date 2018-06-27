import foundations from 'foundations/';
import main from 'screens/main/main';

const store = foundations.store;

// temp pages
const screens = {
	main,
};

function getSelectedKey() {
	return store.get('screens.selected');
}

function getSelected() {
	let key = getSelectedKey().data;

	if (typeof screens[key] !== 'object') {
		throw `Screen not found for given key ${key}`;
	}

	return screens[key]
}

function getScreens() {
	return screens;
}

function setSelectedKey(key) {
	store.asyncSet('screens.selected', key)
}

function getScreenByName(name) {
	if (typeof screens[name] !== 'function') {
		throw `Screen not found for given key ${name}`;
	}

	return screens[name]
}

module.exports = {
	getSelected,
	getScreenByName,
	setSelectedKey,
};


