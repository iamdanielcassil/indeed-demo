import * as store from 'foundations/store';

const foundations = { 
	store,
};

for (let key in actions) {
	let action = foundations[key];

	// Some base actions files like logic and cookies don't use other actions so they won't have init
	if (typeof action.init === 'function') {
		action.init(foundations);
	}
}

window.APP = window.APP || {};
document.APP.FOUNDATIONS_API = foundations;
export default foundations;
	
