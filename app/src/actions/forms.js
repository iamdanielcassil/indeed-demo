import foundations from 'foundations/';

const store = foundations.store;
const API_PATH = 'http://localhost:3000/forms';
function init() {
	async.fetch();
}

const async = {
	fetch: function() {
		let promise = foundations.http.get(API_PATH, {
		});

		store.asyncSet('forms.all', promise);
	},
	update: function(form) {
		let promise = foundations.http.put(`${API_PATH}/${form.id}`, form, {})

		store.asyncSet('forms.all', promise);
	}
}
function getForms() {
	return store.get('forms.all').data;
}
function removeField(id) {
	let form = getSelected();

	form = _removeField(form, id);
	updateSelected(form);
	async.update(form);
}
function updateFieldName(id, name) {
	let form = getSelected();
	let field = getFieldOnForm(form, id);

	field.name = name;
	form = _updateField(form, id, field)
	updateSelected(form);
	async.update(form);
}
function getFieldOnForm(form, id) {
	let returnField;

	form.sections.forEach(section => {
		if (returnField) {
			return;
		}
		section.fields.find(field => {
			if (field.id === id) {
				returnField = field;
				return;
			}
		})
	})

	return returnField;
}
function updateSelected(form) {
	store.asyncSet('forms.selected', form);
}
function getSelected() {
	return store.get('forms.selected').data;
}
function setSelected(id) {
	let forms = getForms();
	let selected = forms.find(form => form.id === id)
	updateSelected(selected);
}
function _removeField(form, id) {
	form.sections.forEach((section, index) => {
		form.sections[index].fields = section.fields.filter(field => field.id !== id);
	});

	return form;
}
function _updateField(form, id, field) {
	form.sections.forEach((section, index) => {
		form.sections[index].fields = section.fields.map(sField => {
			if (sField.id === id) {
				return field;
			} else {
				return sField;
			}
		});
	});

	return form;
}

module.exports = {
	getForms,
	removeField,
	updateFieldName,
	setSelected,
	async,
	init,
};


