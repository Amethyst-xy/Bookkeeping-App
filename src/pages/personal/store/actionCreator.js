import {constants} from './index';
import axios from "axios";
import { fromJS } from 'immutable';

const getData=(value)=>({
    type:constants.GET_DATA,
    value:fromJS(value)
})

export const getDataAction=()=>{
    return (dispatch)=>{
        axios.get('/detail.json').then(res=>{
            const data=res.data.data;
            const action=getData(data);
            dispatch(action);
        })
    }
}

export const getTotalAction=(count,out,_in,points)=>({
    type:constants.GET_TOTAL_DATA,
    count,
    out,
    _in,
    points
});