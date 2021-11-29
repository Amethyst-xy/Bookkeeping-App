import {fromJS} from 'immutable';
import {constants} from './index';

const defaultState=fromJS({
    isShow:false,
    recent:[]
});

let func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.HANDLE_ADDITEM:
            return state.set('isShow',action.isShow);
        case constants.GET_RECENT_DATA:
            return state.set('recent',action.data);
        case constants.ADD_ITEM:
            const new_item={
                type:action._type,
                date:action.time,
                money:action.money,
                detail:action.info
            };
            const newState=JSON.parse(JSON.stringify(state));
            let last_date=newState.recent.day[0].date;
            if(action.time!==last_date){
                newState.recent={
                    id:1,
                    day:[new_item]
                };
            }else{
                newState.recent.day.push(new_item);
            }
            return fromJS(newState);

        default:
            return state;
    }
}

export default func;