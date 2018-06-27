import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
import styles from 'components/fields/fields.css';
import Loading from 'screens/loading/loading'

class Main extends React.Component {
	constructor() {
		super();

		this.remove = this.remove.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.renderFieldEditControsl = this.renderFieldEditControsl.bind(this);
	}
	remove() {
		let id = this.props.field.id;
		
		actions.forms.removeField(id);
	}
	renderFieldEditControsl() {
		return (
			<div className={styles.editControls} >
				<div className={styles.remove} onClick={this.remove}>Remove</div>
			</div>
		)
	}
	onMouseEnter() {
		this.setState({isHovering: true})
	}
	onMouseLeave() {
		this.setState({isHovering: false})
	}
	render() {
		let field = this.props.field;
		let Field = actions.fields.getField(field.type);
		let isHovering = this.state && this.state.isHovering;

		return (
			<div onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
				{isHovering ? this.renderFieldEditControsl() : ''}
				<Field {...field} />
			</div>
		)
	}
}

export default foundations.store.subscribe(Main, {
});

