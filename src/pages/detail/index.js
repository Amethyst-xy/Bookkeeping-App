import React,{Component} from 'react';
import Footer from '../home/components/footer';
import Header from '../home/components/header';
import DetailContent from './components/content';
import {Link} from 'react-router-dom';
import {
    HomeOutlined
} from '@ant-design/icons';
import './index.less';

class DetailPart extends Component{
    render(){
        return (
            <div className='detail_container'>
                <Link to='/' className='to_home'><span>Home</span><HomeOutlined/></Link>
                <Header/>
                <DetailContent type="detail"/>
                <Footer/>
            </div>
        );
    }
}

export default DetailPart;
