import React,{Component} from 'react';
import '../index.less';

class CateHeader extends Component{
    render(){
        return(
            <div className='cate_header'>
                <div className='header_l c_header'></div>
                <div className='header_r c_header'></div>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default CateHeader;