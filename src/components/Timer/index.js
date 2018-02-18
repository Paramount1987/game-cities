import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect}    from 'react-redux';

import {endingGame} from '../../AC';

class Timer extends Component {
    state = {
        timer: 10,
        running: false,
        intervalHolder: null
     };

    componentWillReceiveProps(nextProps) {
        if(nextProps.isGameOver) {
            this.stopTimer();
            return;
        }

        if((nextProps.isStartGame && !this.state.running))
            this.startTime();

        if((this.props.activeId && this.props.activeId != nextProps.activeId)
            || (this.props.isGameOver && !nextProps.isGameOver)) {
            this.restartTime();
        }
    }

    render() {
        const {isStartGame, isGameOver} = this.props;
        const {timer} = this.state;

        if(!isStartGame) return null;

        return (
            <div>
                Время:
                <div className={timer < 6 ? 'text-red' : ''}>{timer}</div>
            </div>
        );
    }

    startTime = () => {
        if(!this.state.running) this.setState({running: true});

        this.setTimeInterval();
    }

    restartTime = () => {
        clearInterval(this.state.intervalHolder);

        this.setState({timer: 10});
        this.setTimeInterval();
    }

    stopTimer = () => {
        clearInterval(this.state.intervalHolder);
    }

    setTimeInterval = () => {
        const holder = setInterval(() => {
                this.setState({timer: this.state.timer - 1});

                if(!this.state.timer) {
                    this.stopTimer();
                    this.props.endingGame(false, this.props.lives);
                }
            }
            ,1000);

        this.setState({intervalHolder: holder});
    }
}

Timer.propTypes = {
    isStartGame: PropTypes.bool.isRequired,
    isGameOver: PropTypes.bool.isRequired,
    endingGame: PropTypes.func.isRequired,
    activeId: PropTypes.number,
    lives: PropTypes.number.isRequired
};
Timer.defaultProps = {};

export default connect((state) => ({
    lives: state.scores.lives,
    isGameOver: state.country.isGameOver,
    isStartGame: state.country.isShow,
    activeId: state.city.activeId
}), {endingGame})(Timer);
