import React, { Component } from 'react';

// import FieldCard from './FieldCard';
import Draggable from 'react-draggable';
import Counter from './Counter';
import _ from 'lodash';

import styles from '../../styles/Field/FieldCard.css';

class FieldCard extends Component {
	eventLogger(e, data) {
	    console.log('Event: ', e);
	    console.log('Data: ', data);
	}

	handleHover(cardLink) {
		this.props.onCardFocus(cardLink);
	}

	handleStop(event, data) {
		if (data.x <= -30) {
			console.log("We are placing in a pile!!");
		}
		// console.log("props", this.props);
		
		this.props.onUpdateCardPosition({id: this.props.card.MTG_CARD_ID, x: data.x, y: data.y}, this.props.client.userID);
	}

	handleTapCard() {
		this.props.onHandleTapCard(this.props.card.MTG_CARD_ID, this.props.client.userID);
	}

	handleSelect() {
		this.props.onHandleSelect(this.props.card.MTG_CARD_ID, this.props.client.userID);
	}

	checkForSelect(users, card) {
		var isSelected = false;
		var color = "";

		_.map(users, function(user) {
			if (user.selectedCard == card.MTG_CARD_ID) {
				isSelected = true;
				color = user.selectColor;
			}
		});

		if (isSelected) {
			return "2px solid " + color;
		}
		else {
			return "";
		}
	}

	render() {
		return (
			<Draggable
				axis="both"
				handle=".handle"
				defaultPosition={{x: 24, y: 24}}
				position={{x: this.props.card.xpos, y: this.props.card.ypos}}
				onStart={this.handleStart}
				onDrag={this.handleDrag}
				onStop={(e, data) => { this.handleStop(e, data)}}
				bounds={{top: 5, left: -87, bottom: 324}}>
				<div 
					className={"handle " + styles.fieldCardPositionning} 
					onMouseOver={() => {this.handleHover(this.props.card.MTG_CARD_LINK)}}
					onDoubleClick={()=>{this.handleTapCard()}}
					onClick={()=>{this.handleSelect()}}>
					<div style={{
						backgroundImage: "url(" + this.props.card.MTG_CARD_LINK + ")",
						border: this.checkForSelect(this.props.users, this.props.card),
					}} className={styles.card + " " + (this.props.card.MTG_CARD_IS_TAPPED ? styles.tapped : "")}>

					</div>
				</div>
			</Draggable>
		)
	}
};

export default FieldCard;
// bounds={{top: 24, left: 0, bottom: 324}}
// styles.cardActive
//  + styles.tapped

// <Counter/>

// <div className={"handle " + styles.fieldCardPositionning}>
// 	<div className={styles.card}></div>
// </div>

// <div className={"handle " + styles.fieldCardPositionning + " " + styles.backCard}>
// 	<div className={styles.backCircle}></div>
// </div>
