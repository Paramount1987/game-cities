import {INCREMENT_SCORES, ZERO_SCORES, DECREMENT_LIVES, INIT_LIVES} from '../constants';

const defaultState = {
    point: 0,
    lives: 3
};

export default (scoresState = defaultState, action) => {
    const {type} = action;

    switch (type) {
        case INCREMENT_SCORES:
            return {...scoresState, point: scoresState.point + 1};

        case DECREMENT_LIVES:
            return {...scoresState, lives: scoresState.lives - 1};

        case ZERO_SCORES:
            return {...scoresState, point: 0, lives: 3};

        case INIT_LIVES:
            return {...scoresState, lives: 3};
    }

    return scoresState;
}
