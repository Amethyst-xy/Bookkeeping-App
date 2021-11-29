import React,{Component} from 'react';
import {connect} from 'react-redux';
import '../index.less';
const avatar='./static/bg9.jpg';

class Header extends Component{
    render(){
        const {counts,out,_in,points}=this.props;
        return (
            <div className='per_container' style={{'background':`url(${avatar})`,'backgroundSize':'100% 100%'}}>
                <div className='info'>
                    <img alt='' src='./static/avatar.jpg'/>
                    <p>Amethyst</p>
                </div>
                <div className='nav'>
                    <div className='nav_item'>
                        <p>{counts}</p>
                        <p>总交易(次)</p>
                    </div>
                    <div className='nav_item'>
                        <p>{out}</p>
                        <p>总支出(元)</p>
                    </div>
                    <div className='nav_item'>
                        <p>{_in}</p>
                        <p>总收入(元)</p>
                    </div>
                    <div className='nav_item'>
                        <p>{points}</p>
                        <p>积分</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapState=(state)=>{
    return {
        counts:state.getIn(['personal','counts']),
        out:state.getIn(['personal','out']),
        _in:state.getIn(['personal','_in']),
        points:state.getIn(['personal','points'])
    }
}

export default connect(mapState,null)(Header);