import {country}   from '../data/country';
import {SHOW_COUNTRY, START_GAME, GAME_OVER, RESTART_GAME} from '../constants';

const defaultState = {
    isWon: false,
    isGameOver: false,
    isShow: false,
    active: {},
    guessed: [],
    notGuessed: [],
    entities: country
};

export default (countryState = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case START_GAME:
            const {restart} = payload;

            if(restart) return {...countryState, isGameOver: false, guessed: [],notGuessed: [], isWon: false};

            return {...countryState, isShow: true, isWon: false};

        case GAME_OVER:
            const {isSuccess} = payload;
            let arrGuessedF = [];
            let arrNotGuessedF = [];

            if(isSuccess) {
                arrGuessedF.push(countryState.active.flag);
                return {...countryState, isGameOver: true, isWon: isSuccess,
                        entities: country, guessed: countryState.guessed.concat(arrGuessedF)};
            }

            if(!isSuccess) {
                arrNotGuessedF.push(countryState.active.flag);
                return {...countryState, isGameOver: true, isWon: isSuccess,
                        entities: country, notGuessed: countryState.notGuessed.concat(arrNotGuessedF)};
            }

        case SHOW_COUNTRY:
            const {currIndex, isFirst} = payload;
            const currCountry = countryState.entities[currIndex];
            let arrGuessed = [];

            if(countryState.active.flag && !isFirst) arrGuessed.push(countryState.active.flag);

            if(currCountry === -1) return {...countryState, isGameOver: true, isWon: true};

            return {...countryState, active: currCountry,
                    entities: countryState.entities.filter((item, i) => i !== currIndex),
                    guessed: payload.isGuessed ? countryState.guessed.concat(arrGuessed) :  countryState.guessed,
                    notGuessed: payload.isGuessed ? countryState.notGuessed : countryState.notGuessed.concat(arrGuessed)};
    }

    return countryState;
}
