import React, { Component } from 'react';

import styles from '../../../styles/Field/Counter/PlayerCountersList.css';

class HandCounter extends Component {
	render() {
		return (
			<div className={styles.counter} style={{backgroundColor: this.props.color}}>
				<div className={styles.hoverStyle}>
					<div className={styles.text}>{this.props.title}</div>
					<div className={styles.counterCount}>{this.props.value}</div>
				</div>
			</div>
		)
	}
};

export default HandCounter;
