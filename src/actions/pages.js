import foundations from 'foundations/';
import main from 'pages/main/main';
import test from 'pages/test/test';

const store = foundations.store;

// temp pages
const pages = [
	{path: '/', pageType: 'default'},
	{path: '/main', pageType: 'default'},
	{path: '/test', pageType: 'default'},
	{path: '/404', pageType: 'default'},
];

function getAppPages() {
	return store.get('pages.app');
}

function setSMTPages(pages) {
	let pagesPromise = Promise.resolve(pages);

	store.asyncSet('pages.smt', pagesPromise)
}

function getSMTPages(pages) {
	store.set('pages.smt');
}

function setSMTCategories(pages) {
	let pagesPromise = Promise.resolve(pages);
	
	store.asyncSet('pages.smtcategories', pagesPromise)
}

function getSMTCategories(pages) {
	store.set('pages.smtcategories');
}

function fetchAppPages(delay = 200) {
	let pagesPromise = new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve(pages)
		}, delay)
	});

	store.asyncSet('pages.app', pagesPromise)
}

function getPageComponentByPath(path) {
	switch (path) {
		case '/':
			return main
			break;
		case '/main':
			return main
			break;
		default:
			return test
			break;
	}
}

function getScreenByName(name) {
	return pages[name] || 'div';
}

function getCurrentOptions() {
	return foundations.store.get('pages.selectedOptions');
}

function setSelected(name, options) {
	let mockPromise = new Promise((resolve, reject) => {
		window.setTimeout(() => {
			resolve(name);
		}, 2000)
	});

	store.set('pages.selectedOptions', options);
	store.asyncSet('pages.selectedPath', mockPromise);
}

function getSelectetd() {
	let selectedPath = store.get('pages.selectedPath');

	return pages.find(page => {
		page.path === selectedPath;
	});
}


module.exports = {
	fetchAppPages,
	getAppPages,
	getPageComponentByPath,
	getScreenByName,
	getCurrentOptions,
	setSelected,
	setSMTPages,
	setSMTCategories
};


