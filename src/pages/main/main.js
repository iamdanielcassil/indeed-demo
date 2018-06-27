import React from 'react';
import foundations from 'foundations/';
import actions from 'actions/';
import styles from 'pages/main/main.css';
import Loading from 'pages/loading/loading'

class Main extends React.Component {
	render() {
		let Layout = actions.layouts.getLayoutByName(this.props.layoutKey);
		return ([
			<Layout key="layout" />,
			this.props.layouts.isLoading ? <Loading key="loading" /> : null
		]);
	}
}

export default foundations.store.subscribe(Main, {
	layouts: 'layouts.app',
	layoutKey: 'layouts.selected',
});

