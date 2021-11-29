import React,{Component} from 'react';
import DetailItem from '../../detail/components/detailitem';
import '../index.less';

class CateCon extends Component{
    render(){
        return(
            <div className='cate_con'>
                <DetailItem date={7}/>
                <DetailItem date={6}/>
                <DetailItem date={5}/>
            </div>
        );
    }
}

export default CateCon;