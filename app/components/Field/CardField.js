import React, { Component } from 'react';

import PlayerBox from './PlayerBox';

import styles from '../../styles/Field/CardField.css';

class CardField extends Component {
	render() {
		return (
			<div className={styles.cardField}>
        <div className={styles.dimensions}>
          <div className={styles.PlayerBox}>
            <PlayerBox />
          </div>
					<div className={styles.Separator}></div>
          <div className={styles.PlayerBox}>
            <PlayerBox />
          </div>
        </div>
			</div>
		)
	}
};

export default CardField;
