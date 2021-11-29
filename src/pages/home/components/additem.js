import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Radio } from 'antd';
import '../style/index.less';
import { actionCreator } from '../store';

class AddItems extends Component{
  constructor(props){
    super(props);
    this.getAddInfo=this.getAddInfo.bind(this);
  }
  render(){
    const {addItem}=this.props;
      return (
          <div className='addition'>
              <div className='add_box'>
                  <h4>记账</h4>
                  <div className='add_item'>
                    <p>类型</p>
                    <Radio.Group className='radiogroup'>
                      <Radio value={1}>餐饮</Radio>
                      <Radio value={2}>旅行</Radio>
                      <Radio value={3}>学习</Radio>
                      <Radio value={4}>购物</Radio>
                      <Radio value={5}>社交</Radio>
                      <Radio value={6}>服饰</Radio>
                    </Radio.Group>
                  </div>
                  <div className='add_item'>
                    <p>支出/收入</p>
                    <Radio.Group className='addorsub'>
                      <Radio value={1}>收入</Radio>
                      <Radio value={2}>支出</Radio>
                    </Radio.Group>
                  </div>
                  <div className='add_item'>
                    <span>金额(元)</span>
                    <input type='text' placeholder='请输入...' ref={input=>{this.money=input}}/>
                  </div>
                  <div className='add_item'>
                    <span>说明</span>
                    <input type='text' placeholder='请输入...'ref={input=>{this.info=input}}/>
                  </div>
                  <div className='add_item'>
                    <button className='fl' onClick={()=>{this.getAddInfo();addItem(false)}}>确定</button>
                    <button className='fr' onClick={()=>{addItem(false)}}>取消</button>
                  </div>
              </div>
          </div>
      );
  }

  getChecked(_className){
    let radios=document.querySelector(_className).children;
    for(let i=0;i<radios.length;i++){
      let check_status=radios[i].firstChild.firstChild.checked;
      let text=radios[i].lastChild.innerText;
      if(check_status){
        return text;
      }
    }
  }

  getAddInfo(){
    //所选消费类型
    let type=this.getChecked('.radiogroup');
    let time,money,info;
    
    money=this.money.value;
    if(this.getChecked('.addorsub')==='支出'){
      money*=-1;//若选择支出，则金额显示为负数
    }
    //说明
    info=this.info.value;

    //获取并格式化当前日期
    let date=new Date();
    let month=date.getMonth()<9?'0'+(date.getMonth()+1):date.getMonth()+1;
    time=date.getFullYear()+'-'+month+'-'+date.getDate();
  
    this.props.addNewInfo(type,time,money,info);
  }
}

const mapDispatch=(dispatch)=>{
  return {
    addNewInfo(type,time,money,info){
      const action=actionCreator.getAddItemAction(type,time,money,info);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatch)(AddItems);