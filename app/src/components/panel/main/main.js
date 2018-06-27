import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
import Fields from 'components/fields/fields'
import styles from 'components/panel/main/main.css';
import Loading from 'screens/loading/loading'

class Main extends React.Component {
	constructor() {
		super();

		this.editClick = this.editClick.bind(this);
		this.stopEditClick = this.stopEditClick.bind(this);
		this.renderForm = this.renderForm.bind(this);
		this.renderFormSection = this.renderFormSection.bind(this);
		this.renderField = this.renderField.bind(this);
	}
	editClick() {
		this.setState({
			isEditing: true
		});
	}
	stopEditClick() {
		this.setState({
			isEditing: false
		});
	}
	renderField(field) {
		let isEditing = this.state && this.state.isEditing;
		let className = styles.field;
		
		className += isEditing ? ' ' + styles.highlight : '';

		return <div className={className} ><Fields field={field} isEditing={isEditing} /></div>
	}
	renderFormSection(section) {
		return (
			<div key={section.name} className={styles.section}>
				<div className={styles.sectionHeader}>
					{section.name}
				</div>
				<div className={styles.sectionBody}>
					{section.fields.map(this.renderField)}
				</div>
				
			</div>
		)
		
	}
	renderForm() {
		let form = this.props.form.data;
		let isEditing = this.state && this.state.isEditing;
		let button = <button className={styles.edit} onClick={this.editClick}>Edit</button>;

		if (!form.sections) {
			return <div>Blank State</div>
		}

		if (isEditing) {
			button = <button className={styles.edit} onClick={this.stopEditClick}>Done</button>
		}

		return (				
				( <div className={styles.wrapper}>
					{button}
					{form.name}
					{form.sections.map(this.renderFormSection)}
				</div>)
		)
	}
	render() {
		let form = this.props.form;

		return form.isLoading ? <Loading key="loading" /> : this.renderForm();
	}
}

export default foundations.store.subscribe(Main, {
	form: 'forms.selected'
});

