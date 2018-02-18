import {DECREMENT_TIMER, START_TIMER, END_TIMER} from '../constants';

const defaultState = {
    time: 10
};

export default (timerState = defaultState, action) => {
    const {type} = action;

    switch (type) {
        case START_TIMER:
            return {...timerState, time: 10};

        case END_TIMER:
            return {...timerState, time: 0};
    }

    return timerState;
}
