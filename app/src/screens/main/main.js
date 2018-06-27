import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
import styles from 'screens/main/main.css';
import Loading from 'screens/loading/loading';
import LeftPanel from 'components/panel/left/left';
import MainPanel from 'components/panel/main/main';

class Main extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<LeftPanel />
				<MainPanel />
			</div>
		)
	}
}

export default foundations.store.subscribe(Main, {
});

