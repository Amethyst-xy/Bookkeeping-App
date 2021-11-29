import { fromJS } from "immutable";
import { constants } from "./index";

const defaultState=fromJS({
    data:[],
    counts:0,
    out:0,
    _in:0,
    points:0
});

let func=(state=defaultState,action)=>{
    switch(action.type){
        case constants.GET_DATA:
            return state.set('data',action.value);
        case constants.GET_TOTAL_DATA:
            return state.merge({
                counts:action.count,
                out:action.out,
                _in:action._in,
                points:action.points
            });
        default:
            return state;
    }
}

export default func;