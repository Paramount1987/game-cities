import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import {connect}    from 'react-redux';
import {startGame}   from '../../AC';
import {getRandomIndex} from '../../helpers';

class ButtonStart extends Component {
    render() {
        const {isGameStart, isGameOver} = this.props;

        if(isGameStart && !isGameOver) return null;

        return (
            <div>
                <Button bsStyle="primary" onClick = {this.handlerClick}>
                    {isGameOver ? 'Попробуйте еще раз' : 'Начать игру'}
                </Button>
            </div>
        );
    }

    handlerClick = () => {
        const {startGame, country, isGameOver} = this.props;
        const currIndexCountry = getRandomIndex(country);
        const currIndexCity = country[currIndexCountry].id;

        startGame(currIndexCountry, currIndexCity, isGameOver);
    }
}

ButtonStart.propTypes = {
    country: PropTypes.array.isRequired,
    isGameStart: PropTypes.bool.isRequired,
    startGame: PropTypes.func.isRequired,
    isGameOver: PropTypes.bool.isRequired
};
ButtonStart.defaultProps = {};

export default connect(state => ({
    country: state.country.entities,
    isGameStart: state.country.isShow,
    isGameOver: state.country.isGameOver
}),{startGame})(ButtonStart);
