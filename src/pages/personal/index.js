import React,{Component} from 'react';
import Header from './components/header';
import Footer from '../home/components/footer';
import ContentPart from './components/content';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreator } from './store';
import {
    HomeOutlined
} from '@ant-design/icons';
import './index.less';

class PersonalPart extends Component{
    render(){
        return (
            <div>
                <Link to='/' className='to_home'><span>Home</span><HomeOutlined/></Link>
                <Header/>
                <ContentPart/>
                <Footer/>
            </div>
        );
    }

    componentDidMount(){
        this.props.getData();
        let count=0;
        let out=0;
        let _in=0;
        let points=0;
        setTimeout(() => {
            if(this.props.data){
                const arr=this.props.data.toJS();
                arr.forEach(item=>{
                    //总积分
                    count+=item.day.length;  
                    item.day.forEach(i=>{
                        let money=Number(i.money);
                        //收入支出
                        if(money>0){
                            _in+=money;
                        }else{
                            out+=Math.abs(money);
                        }
                        //积分
                        if(Math.abs(money)>20){
                            points+=Math.floor(Math.abs(money));
                        }
                    })              
                },300);
                this.props.getTotalData(count,out,_in,points);
            }
        },300);
    }
}

const mapState=(state)=>{
    return {
        data:state.getIn(['personal','data']),
        count:state.getIn(['personal','count']),
        out:state.getIn(['personal','out']),
        in:state.getIn(['personal','in']),
        points:state.getIn(['personal','points'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        getData(){
            const action=actionCreator.getDataAction();
            dispatch(action);
        },
        getTotalData(count,out,_in,points){
            const action=actionCreator.getTotalAction(count,out,_in,points);
            dispatch(action);
        }
    }
}

export default connect(mapState,mapDispatch)(PersonalPart);