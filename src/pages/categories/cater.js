import React,{Component} from 'react';
import CateHeader from './components/header';
import Footer from '../home/components/footer';
import DetailContent from '../detail/components/content';
import {Link} from 'react-router-dom';
import {
    HomeOutlined
} from '@ant-design/icons';
import './index.less';

class CategoryCater extends Component{
    render(){
        return(
            <div>
                <Link to='/' className='to_home'><span>Home</span><HomeOutlined/></Link>
                <CateHeader title="餐饮"/>
                <DetailContent type="cater"/>
                <Footer/>
            </div>
        );
    }
}

export default CategoryCater;