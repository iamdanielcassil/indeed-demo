import * as store from 'foundations/store';
import * as http from 'foundations/http';

const foundations = {
	http,
	store,
};

for (let key in foundations) {
	let action = foundations[key];

	// Some base actions files like logic and cookies don't use other actions so they won't have init
	if (typeof action.init === 'function') {
		action.init(foundations);
	}
}

window.APP = window.APP || {};
window.APP.FOUNDATIONS_API = foundations;
export default foundations;
	
