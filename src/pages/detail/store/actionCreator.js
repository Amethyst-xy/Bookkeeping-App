import {constants} from './index';
import { fromJS } from 'immutable';
import axios from 'axios';

const getData=(data)=>({
    type:constants.GET_DATA,
    data:fromJS(data)
});

export const getDataAction=(type)=>{
    return (dispatch)=>{
        axios.get(`/${type}.json`).then(res=>{
            const data=res.data.data;
            const action=getData(data);
            dispatch(action);
        }).catch(err=>console.log(err));
    }
}