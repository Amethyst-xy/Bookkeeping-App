import {constants} from './index';
import axios from 'axios';
import { fromJS } from 'immutable';

const getRecent=(data)=>({
    type:constants.GET_RECENT_DATA,
    data:fromJS(data)
});

export const addItemAction=(isShow)=>({
    type:constants.HANDLE_ADDITEM,
    isShow
});

export const getRecentAction=()=>{
    return (dispatch)=>{
        axios.get('/detail.json').then(res=>{
            const data=res.data.data[0];
            const action=getRecent(data);
            dispatch(action);
        })
    }
}

export const getAddItemAction=(_type,time,money,info)=>({
    type:constants.ADD_ITEM,
    _type,
    time,
    money,
    info
});

