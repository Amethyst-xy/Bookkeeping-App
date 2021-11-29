import {combineReducers} from 'redux-immutable';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store';
import {reducer as personalReducer} from '../pages/personal/store';

const reducer=combineReducers({
    home:homeReducer,
    detail:detailReducer,
    personal:personalReducer
});

export default reducer;