import React, { Component } from 'react';
import s from './Card.module.scss';

class Card extends Component {
    state = {
        done: false,
    };

    handleCardClick = () => {
        this.setState(this.state.done ? { done: false,} : { done: true,});
    };

    render() {
        const { eng, rus } = this.props;
        const { done } = this.state;

        const cardClass = [s.card];
        if (done) {
            cardClass.push(s.done);
        }

        return (
            <div className={cardClass.join(' ')}
            onClick={this.handleCardClick}
            >
                <div className={s.cardInner}>
                    <div className={s.cardFront}>
                        { eng }
                    </div>
                    <div className={s.cardBack}>
                        { rus }
                    </div>
                </div>   
            </div>
        );
    }
};

export default Card;