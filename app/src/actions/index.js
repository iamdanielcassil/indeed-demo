import * as screens from 'actions/screens';
import * as forms from 'actions/forms';
import * as fields from 'actions/fields';

const actions = { 
	screens,
	forms,
	fields,
};

for (let key in actions) {
	let action = actions[key];

	// Some base actions files like logic and cookies don't use other actions so they won't have init
	if (typeof action.init === 'function') {
		action.init(actions);
	}
}
window.APP = window.APP || {};
window.APP.ACTIONS_API = actions;
export default actions;
	
