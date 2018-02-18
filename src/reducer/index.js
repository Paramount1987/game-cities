import {combineReducers}   from 'redux';
import country   from './country';
import city from './city';
import scores   from './scores';

export default combineReducers({
    country, city, scores
});