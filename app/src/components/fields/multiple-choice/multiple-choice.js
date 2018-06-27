import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
import styles from 'components/fields/multiple-choice/multiple-choice.css';
import Loading from 'screens/loading/loading'

class Main extends React.Component {
	constructor() {
		super();

	}
	renderForDisplay() {
		return <div></div>
	}
	renderInEditMode() {
		return <div></div>
	}
	render() {
		let isInEdit = this.props.editting;

		if (isInEdit) {
			return this.renderInEditMode()
		} else {
			return this.renderForDisplay()
		}
	}
}

export default foundations.store.subscribe(Main, {
});

