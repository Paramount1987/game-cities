import {SHOW_COUNTRY, SHOW_CITY, START_GAME, GAME_OVER, RESTART_GAME,
    INCREMENT_SCORES, ZERO_SCORES, DECREMENT_LIVES, INIT_LIVES}   from '../constants';

export function startGame(idCountry, idCity, isGameOver) {
    return (dispatch) => {
        dispatch({
            type: START_GAME,
            payload: {restart: isGameOver}
        });

        dispatch({
            type: SHOW_COUNTRY,
            payload: {currIndex: idCountry, isFirst: true}
        });

        dispatch({
            type: SHOW_CITY,
            payload: {id: idCity}
        });

        dispatch({
            type: ZERO_SCORES
        });
    }
}

export function endingGame(isSuccess, lives) {
    return (dispatch => {
        setTimeout(() => {

            if(lives) {
                dispatch({
                    type: DECREMENT_LIVES,
                });
            }

            dispatch({
                type: GAME_OVER,
                payload: {isSuccess}
            });
        }, 200);

    });
}

export function showCountry(idCountry, idCity, incorrect) {
    return (dispatch => {
        setTimeout(() => {
            dispatch({
                type: SHOW_COUNTRY,
                payload: {currIndex: idCountry, isGuessed: incorrect ? false : true}
            });

            dispatch({
                type: SHOW_CITY,
                payload: {id: idCity}
            });
        }, 200);

    });
}

export function incrementScores() {
    return (dispatch => {
        setTimeout(() => {
            dispatch({
                type: INCREMENT_SCORES
            });
        }, 200);

    });
}

export function initLives() {
    return {
        type: INIT_LIVES
    }
}

export function decrementLives() {
    return (dispatch => {
        setTimeout(() => {
            dispatch({
                type: DECREMENT_LIVES
            });
        }, 200);

    });
}