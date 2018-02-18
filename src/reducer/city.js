import {city, newCity}   from '../data/city';
import {SHOW_CITY} from '../constants';

import {getRandomDouble}       from '../helpers';

const defaultState = {
    showCity: [],
    activeId: 0,
    entities: newCity
};

export default (cityState = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SHOW_CITY:
            const {id} = payload;
            const citiesOnScreen = getNewActiveCities(cityState.entities[id]);
            //const citiesOnScreen = getActiveCities(cityState.entities, id, getRandomDouble(id, cityState.entities.amount));

            return {...cityState, activeId: id, showCity: citiesOnScreen};
    }

    return cityState;
}

function getNewActiveCities(cities) {
    let result = [];
    let tmpArr = [];
    let counter = 0;

    while(counter < 3) {
        let randomId = Math.round(Math.random() * 2);

        if(!tmpArr.includes(randomId)) {
            tmpArr.push(randomId);
            result.push(cities[randomId]);

            counter++;
        }
    }

    return result;
}

// return showing Cities
function getActiveCities(cities, id, arrNum) {
    let result = [];
    let tmpArr = [];
    let counter = 0;

    while(counter < 3){
        let randomId = Math.round(Math.random() * 2);

        if(!tmpArr.includes(randomId)) {
            tmpArr.push(randomId);

                switch (randomId) {
                    case 0:
                        result.push(cities[arrNum[0]]);
                        break;
                    case 1:
                        result.push(cities[arrNum[1]]);
                        break;
                    case 2:
                        result.push(cities[id]);
                }
            counter++;
        }
    }

    return result;
}
