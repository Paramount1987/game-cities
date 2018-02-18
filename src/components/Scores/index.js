import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect}    from 'react-redux';

class Scores extends Component {
    render() {
        const {scores, lives, isStartGame, isGameOver} = this.props;

        if(!isStartGame) return null;

        return (
            <div className="d-flex">
                <div>Очки:<div>{scores.point}</div></div>
                {
                    lives && !isGameOver ?
                        <div className="ml-3">Попыток:<div>{lives}</div></div>
                        : null
                }

            </div>
        );
    }
}

Scores.propTypes = {
    lives: PropTypes.number.isRequired,
    scores: PropTypes.object.isRequired,
    isStartGame: PropTypes.bool.isRequired,
    isGameOver: PropTypes.bool.isRequired
};
Scores.defaultProps = {};

export default connect((state) => ({
    lives: state.scores.lives,
    scores: state.scores,
    isStartGame: state.country.isShow,
    isGameOver: state.country.isGameOver
}))(Scores);
