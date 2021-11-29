import React,{Component} from 'react';
import Header from './components/header';
import Footer from './components/footer';
import ContentPart from './components/content';
import {Link} from 'react-router-dom';
import './style/index.less';
import {
    HomeOutlined
} from '@ant-design/icons';

class HomePage extends Component{
    render(){
        return (
            <div className='container'>
                <Link to='/' className='to_home'><span>Home</span><HomeOutlined/></Link>
                <Header/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              '
                <ContentPart/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;