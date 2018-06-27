import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
import styles from 'screens/loading/loading.scss';

class Main extends React.Component {
	constructor() {
		super();
	}
	renderLoading() {
		return (
			<div className={styles.overlay}>
				<div className={`${styles.spinner} ${styles.center}`}>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
					<div className={styles.blade}></div>
				</div>
			</div>
		);
	}

	render() {
		return this.renderLoading();
	}
}

export default foundations.store.subscribe(Main, {
});

