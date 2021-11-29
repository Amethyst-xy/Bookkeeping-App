import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { actionCreator } from '../store';

class ContentPart extends Component{
    render(){
        const {data}=this.props;
        const arr=data.toJS().day;
        return (
            <div className='con_wrapper'>
                <div className='con_mid'>
                    <Link to='/category/cater' className='con_mid_item'>
                        <img alt='' src='./static/餐饮.png'/>
                        <p>餐饮</p>
                    </Link>
                    <Link to='/category' className='con_mid_item'>
                        <img alt='' src='./static/购物.png'/>
                        <p>购物</p>
                    </Link>
                    <Link to='/category' className='con_mid_item'>
                        <img alt='' src='./static/旅行.png'/>
                        <p>旅行</p>
                    </Link>
                    <Link to='/category/study' className='con_mid_item'>
                        <img alt='' src='./static/学习.png'/>
                        <p>学习</p>
                    </Link>
                    <Link to='/category' className='con_mid_item'>
                        <img alt='' src='./static/服饰.png'/>
                        <p>服饰</p>
                    </Link>
                    <Link to='/category' className='con_mid_item'>
                        <img alt='' src='./static/社交.png'/>
                        <p>社交</p>
                    </Link>
                </div>
                <div className='news'>
                    <p>新增{arr&&arr.length}条记录&gt;&gt;</p>
                </div>
                <div className='recent'>
                    <p className='title'>最近记录</p>
                    <div className='record'>
                    {
                        arr&&arr.map((item,index) => {
                            return (
                                <ul key={index}>
                                    <li>{item.type}</li>
                                    <li>{item.date}</li>
                                    <li>{item.money}</li>
                                    <li>{item.detail}</li>
                                </ul>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.props.getRecentData();
    }
}

const mapState=(state)=>{
    return {
        data:state.getIn(['home','recent'])
    };
}

const mapDispatch=(dispatch)=>{
    return {
        getRecentData(){
            const action=actionCreator.getRecentAction();
            dispatch(action);
        }
    };
}

export default connect(mapState,mapDispatch)(ContentPart);