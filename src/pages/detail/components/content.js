import React,{Component} from 'react';
import DetailItem from './detailitem';
import {actionCreator} from '../store';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    HomeOutlined
} from '@ant-design/icons';
import '../index.less';

class DetailPart extends Component{
    constructor(props){
        super(props);
        this.getTotal=this.getTotal.bind(this);
        this.getTotalMoney=this.getTotalMoney.bind(this);
    }
    render(){
        const {data}=this.props;
        return (
            <div className='detail_container'>
                <Link to='/' className='to_home'><span>Home</span><HomeOutlined/></Link>
                <div className='detail_content'>
                    <p className='total_money'>总支出: {data&&this.getTotal(data)}元</p>
                    {
                        data&&data.map(item=>{
                            const total=this.getTotalMoney(item.get('day'));
                            return <DetailItem key={item.get('id')} detail_data={item.get('day')} total_money={total}/>
                        })
                    }
                </div>
            </div>
        );
    }

    componentDidMount(){
        this.props.getData(this.props.type);
    }

    //此处有问题——有时候刷新obj是undefined
    //此处的解决方法是在传入obj的时候判断其是否为空
    getTotalMoney(obj){
        let sum=0;
        // setTimeout(()=>{
            obj.toJS().forEach(item => {
                sum+=Number(item.money);
            });
            
            return Number(sum.toFixed(2));
        // },1000);
    }

    getTotal(obj){
        let sum=0;
        obj.forEach(item=>{
            sum+=this.getTotalMoney(item.get('day'));
        })
        return Math.abs(sum).toFixed(2);
    }
}

const mapState=(state)=>{
    return {
        data:state.getIn(['detail','data'])
    }
}

const mapDispatch=(dispatch)=>{
    return {
        getData(type){
            const action=actionCreator.getDataAction(type);
            dispatch(action);
        }
    }
}

export default connect(mapState,mapDispatch)(DetailPart);
