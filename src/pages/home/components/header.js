import React,{Component} from 'react';
import '../style/index.less';
import { Carousel } from 'antd';

class Header extends Component{
    render(){
        return (
            <Carousel autoplay>
            <div>
              <div className='head_h3'>
                <div className='head_con'>
                  <p style={{"fontSize":"21px"}}>今日小结</p>
                  <p>共支出<strong style={{"fontSize":"25px","padding":"4px"}}>58.55</strong>元</p> 
                  <p>其中<strong style={{"fontSize":"22px","padding":"4px"}}>100%</strong>用于餐饮...</p> 
                </div>                
              </div>
            </div>
            <div className='head_h3'>
              <div className='head_con'>
                <p>对比昨日</p>
                <p>消费<strong style={{"fontSize":"25px","padding":"4px"}}>+15.25</strong>元</p> 
                <p>晚上<strong style={{"fontSize":"25px","padding":"4px"}}>00:40</strong>的你还在吃<strong style={{"fontSize":"20px","padding":"4px"}}>狼牙土豆</strong>哦...</p> 
              </div>                
            </div>
            <div className='head_h3'>
              <div className='head_con'>
                <p>学问<strong style={{"fontSize":"22px","padding":"4px"}}>勤</strong>中得，富裕<strong style={{"fontSize":"22px","padding":"4px"}}>俭</strong>中来</p>
                <p><strong style={{"fontSize":"24px","padding":"4px"}}>勤俭节约</strong>是中华民族传统美德</p> 
                <p>节约莫怠慢哦...</p> 
              </div>                
            </div>
          </Carousel>
        );
    }
}

export default Header;