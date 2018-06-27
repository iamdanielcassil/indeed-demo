import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
// import Loading from 'pages/loading/loading';
import styles from 'pages/pages.css'

class Main extends React.Component {
	render() {
		let Page = actions.getPage(this.props.selectedPath);

		return (
			<div className={styles.wrapper}>
			 <Page />
			</div>
		);
	}
}

export default foundations.store.subscribe(Main, {
	selectedPath: 'page.selectedPath',
});

