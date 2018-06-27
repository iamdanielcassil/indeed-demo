import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
import Fields from 'components/fields/fields'
import styles from 'components/panel/main/main.css';
import Loading from 'screens/loading/loading'

class Main extends React.Component {
	constructor() {
		super();

		this.renderForm = this.renderForm.bind(this);
		this.renderFormSection = this.renderFormSection.bind(this);
	}
	renderField(field) {
		return <Fields field={field} />
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
		
		if (!form.sections) {
			return <div>Blank State</div>
		}

		return (
			<div className={styles.wrapper}>
				{form.name}
				{form.sections.map(this.renderFormSection)}
				</div>
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

