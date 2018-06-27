import foundations from 'foundations/';
import longText from 'components/fields/long-text/long-text';
import shortText from 'components/fields/short-text/short-text';
import multipleChoice from 'components/fields/multiple-choice/multiple-choice';

const store = foundations.store;

// temp pages
const fields = {
	longText,
	shortText,
	multipleChoice,
};

function getFields() {
	return fields;
}
function getField(name) {
	if (typeof fields[name] !== 'function') {
		throw `Field type not found for given key ${name}`;
	}

	return fields[name]
}

module.exports = {
	getField,
	getFields
};


