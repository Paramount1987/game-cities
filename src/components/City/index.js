import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect}    from 'react-redux';

import { Button } from 'react-bootstrap';

import {showCountry, endingGame, incrementScores, decrementLives}   from '../../AC';
import {getRandomIndex} from '../../helpers';

const FadeToTop = ({ children, ...props }) => (
    <CSSTransition
        {...props}
        timeout={{
             enter: 500,
             exit: 500,
            }}
        appear={true}
        unmountOnExit={true}
        classNames="FadeToTop"
    >
        {children}
    </CSSTransition>
);

class City extends Component {
    state = {
    }

    componentWillReceiveProps() {
    }

    render() {
        const {cities, isGameOver, isWon} = this.props;
        let counter = 1;

        if(!cities.length) return null;

        if(isWon) return <h4>Поздравляем! Вы выиграли!</h4>;

        if(isGameOver) return <h3>Игра закончена</h3>;

        const elCities = cities.map(city => {
           return (
                <Button key = {Date.now() + counter++} className="btn btn-primary btn-city" onClick = {this.clickHandler(city.id)}>
                    {city.title}
                </Button>
                )
        });

        return (
            <div>
                <div className="btn-toolbar btn-toolbar-cities justify-content-center">{elCities}</div>
            </div>
        );
    }

    clickHandler = (currId) => (ev) => {
        const {endingGame, country, activeId, incrementScores, lives, decrementLives} = this.props;
        const el = ev.target;
        const currIndexCountry = getRandomIndex(country);

        if (this.isCorrectAnswer(activeId, currId)){
            el.classList.add('btn-success');
            incrementScores();
        }else {
            el.classList.add('btn-danger');

            if(lives > 1) {
                decrementLives();
                this.goNextCountry(currIndexCountry, country[currIndexCountry].id, 'incorrect');
                return;
            }

            return endingGame(false, lives);
        }

        if(currIndexCountry === -1) return endingGame('success');

        const currIndexCity = country[currIndexCountry].id;

        this.goNextCountry(currIndexCountry, currIndexCity);
    }

    isCorrectAnswer = (activeId, currId) => {
        return activeId === currId;
    }

    goNextCountry = (currIndexCountry, currIndexCity, incorrect) => {
        const {showCountry} = this.props;
        showCountry(currIndexCountry, currIndexCity, incorrect);
    }
}

City.propTypes = {
    country: PropTypes.array.isRequired,
    cities: PropTypes.array.isRequired,
    activeId: PropTypes.number.isRequired,
    isGameOver: PropTypes.bool.isRequired,
    showCountry: PropTypes.func.isRequired,
    endingGame: PropTypes.func.isRequired,
    isWon: PropTypes.bool.isRequired,
    lives: PropTypes.number.isRequired
};
City.defaultProps = {};

export default connect(state => ({
    lives: state.scores.lives,
    isWon: state.country.isWon,
    country: state.country.entities,
    cities: state.city.showCity,
    activeId: state.city.activeId,
    isGameOver: state.country.isGameOver
}), {showCountry, endingGame, incrementScores, decrementLives})(City);
