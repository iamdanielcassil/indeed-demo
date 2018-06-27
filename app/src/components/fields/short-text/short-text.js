import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
import styles from 'components/fields/short-text/short-text.css';
import Loading from 'screens/loading/loading'
import PropTypes from 'prop-types';
import InlineEdit from 'react-inline-editing';

class Main extends React.Component {
	constructor() {
		super();

		this.nameChange = this.nameChange.bind(this);
		this.handleBlocking = this.handleBlocking.bind(this);
	}
	nameChange(name) {
		let id = this.props.id;

		this.inputSelected = false;
		actions.forms.updateFieldName(id, name);
	}
	handleBlocking() {
		this.inputSelected = true;
	}
	renderForDisplay() {
		console.log(this.props)
		return (
			<div>
				<InlineEdit text={this.props.name}
					paramName={this.props.name}
					onFocusIn={this.handleBlocking}
					onFocusOut={this.nameChange}>
				</InlineEdit>
				<div>{this.props.description}</div>
			</div>
		)
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

