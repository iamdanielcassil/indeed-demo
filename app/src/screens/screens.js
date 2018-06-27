import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
// import Loading from 'pages/loading/loading';
import styles from 'screens/screens.css'

class Screens extends React.Component {
	render() {
		let Screen = actions.screens.getScreenByName(this.props.selectedScreen.data);

		return (
			<div className={styles.wrapper}>
			 <Screen />
			</div>
		);
	}
}

export default foundations.store.subscribe(Screens, {
	selectedScreen: 'screens.selectedKey',
});

