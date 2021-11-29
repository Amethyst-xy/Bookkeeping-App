import React,{Component} from 'react';
import '../index.less';

class DetailItem extends Component{
    render(){
        const {total_money,detail_data}=this.props;
        const arr=detail_data.get(0).get('date').split('-');
        const date=arr[0]+'年'+arr[1]+'月'+arr[2]+'日';
        return (
            <div className='detail_item'>
                <p>{date} &nbsp;共: {total_money}元</p>
                <ul className='list title'>
                    <li>类型</li>
                    <li>时间</li>
                    <li>金额(元)</li>
                    <li>说明</li>
                </ul>
                {
                    detail_data.map((item,index)=>{
                        return (
                            <ul key={index} className='list'>
                                <li>{item.get('type')}</li>
                                <li>{item.get('date')}</li>
                                <li>{item.get('money')}</li>
                                <li>{item.get('detail')}</li>
                            </ul>
                        )
                    })
                }
            </div>
        );
    }
}

export default DetailItem;