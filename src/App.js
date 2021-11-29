import React,{Component,Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import HomePage from './pages/home';
import DetailPart from './pages/detail';
import PersonalPart from './pages/personal';
import CategoryCater from './pages/categories/cater';
import CategoryStudy from './pages/categories/study';
import AddItems from './pages/home/components/additem';
import {connect} from 'react-redux';
import { actionCreator } from './pages/home/store';

class App extends Component{
  render(){
    const {isShow,addItem}=this.props;
    return (
      <Fragment>
        <BrowserRouter>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/detail' exact component={DetailPart}></Route>
          <Route path='/personal' exact component={PersonalPart}></Route>
          <Route path='/category/cater' exact component={CategoryCater}></Route>
          <Route path='/category/study' exact component={CategoryStudy}></Route>
          
        </BrowserRouter>
        {isShow?<AddItems addItem={addItem}/>:''}
      </Fragment>
    );
  }
}

const mapState=(state)=>{
  return {
    isShow:state.getIn(['home','isShow'])
  };
}

const mapDispatch=(dispatch)=>{
  return {
    addItem(value){
        const action=actionCreator.addItemAction(value);
        dispatch(action);
    }
};
}

export default connect(mapState,mapDispatch)(App);
