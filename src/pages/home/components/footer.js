import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreator} from '../store';
import '../style/index.less';
import {
    UserOutlined,
    BarChartOutlined,
    UnorderedListOutlined,
    MoneyCollectOutlined
} from '@ant-design/icons';

class Footer extends Component{
    render(){
        const {addItem}=this.props;
        
        return (
            <div className='bottom'>
                <Link to='/detail' className='bot_item'>
                    <UnorderedListOutlined className='icon'/>
                    <p>明细</p>
                </Link>
                <div className='bot_item'>
                    <BarChartOutlined className='icon'/>
                    <p>图表</p>
                </div>
                <div className='bot_item'>
                    <MoneyCollectOutlined className='icon'/>
                    <p onClick={()=>{addItem(true)}}>记账</p>
                </div>
                <Link to='/personal' className='bot_item'>
                    <UserOutlined className='icon'/>
                    <p>我的</p>
                </Link>
            </div>
        );
    }
}

const mapDispatch=(dispatch)=>{
    return {
        addItem(value){
            const action=actionCreator.addItemAction(value);
            dispatch(action);
        }
    };
}

export default connect(null,mapDispatch)(Footer);