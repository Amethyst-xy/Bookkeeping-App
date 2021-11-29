import React,{Component} from 'react';
import '../index.less';
import {
    BellTwoTone,
    SettingTwoTone,
    TeamOutlined,
    ScheduleTwoTone,
    AlipayCircleOutlined,
    TaobaoCircleOutlined,
    WeiboCircleOutlined,
    WechatOutlined,
    QqOutlined,
    CodeSandboxOutlined,
    AliyunOutlined,
    AntCloudOutlined
} from '@ant-design/icons';

class ContentPart extends Component{
    render(){
        return (
            <div className='con_container'>
                <div className='detail_info'>
                    <div className='info_item'>
                        <BellTwoTone  twoToneColor="blueviolet" className='icon'/>
                        <p>通知</p>
                    </div>
                    <div className='info_item'>
                        <ScheduleTwoTone twoToneColor="blueviolet" className='icon'/>
                        <p>打卡</p>
                    </div>
                    <div className='info_item'>
                        <TeamOutlined className='icon'/>
                        <p>好友</p>
                    </div>
                    <div className='info_item'>
                        <SettingTwoTone twoToneColor="blueviolet" className='icon'/>
                        <p>设置</p>
                    </div>
                </div>
                <div className='detail_info budget_part'>
                    <div className='budget'>
                        <p>06月总预算</p>
                        <p>+&nbsp;&nbsp;设置预算</p>
                    </div>
                    <div className='bud_con'>
                        <div className='bud_l'>
                            <div className='outer'>
                                <div className='inner'>
                                    剩余<br/>
                                    0%
                                </div>
                            </div>
                        </div>
                        <ul className='bud_r'>
                            <li><p>剩余预算:</p><p>0.00</p></li>
                            <li><p>本月预算:</p><p>0.00</p></li>
                            <li><p>本月支出:</p><p>0.00</p></li>
                        </ul>
                    </div>
                </div>
                <div className='detail_info recommend'>
                    <h4>相关推荐</h4>
                    <AlipayCircleOutlined className='icon'/>
                    <TaobaoCircleOutlined className='icon'/>
                    <WeiboCircleOutlined className='icon'/>
                    <WechatOutlined className='icon'/>
                    <QqOutlined className='icon'/>
                    <CodeSandboxOutlined className='icon'/>
                    <AntCloudOutlined className='icon'/>
                    <AliyunOutlined className='icon'/>
                </div>
            </div>
        );
    }
}

export default ContentPart;