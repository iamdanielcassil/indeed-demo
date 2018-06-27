import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
import styles from 'components/panel/left/left.css';
import Loading from 'screens/loading/loading'

class Main extends React.Component {
	constructor() {
		super();

		this.onClick = this.onClick.bind(this);
	}
	onClick(id) {
		console.log(id);

		actions.forms.setSelected(id)
	}
	renderFormRow(form) {
		return (
			<div className={styles.row} key={form.id} onClick={() => {this.onClick(form.id)}}>
				<div className={styles.toolBar}>
					{form.name}
				</div>
				<div className={styles.body}>
				</div>
			</div>
		)
	}
	renderForms() {
		return (
			<div className={styles.wrapper}>{this.props.forms.data.map(form => this.renderFormRow(form))}</div>
		)
	}
	render() {
		let forms = this.props.forms;

		return forms.isLoading ? <Loading key="loading" /> : this.renderForms();
	}
}

export default foundations.store.subscribe(Main, {
	forms: 'forms.all'
});

