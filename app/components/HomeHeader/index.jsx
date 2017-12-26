import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            kewWord: null
        }
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
            <Link to="/City">
                <div className="home-header-left float-left">
                    <span>{this.props.cityName} </span>
                    <i className="icon-angle-down"></i>
                </div>
            </Link>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>                        
                        <input type="text" placeholder="请输入关键字"
                               onChange={this.changeHandle.bind(this)}
                               onKeyUp={this.keyUpHandle.bind(this)}
                               value={this.state.kewWord}/>
                    </div>
                </div>
            </div>
        )
    }
    /* 这里value通过state来赋值，好处是不用自己随时更新value，而是通过react自己的机制来更新的value */
    changeHandle(){
        var val = e.target.value
        this.setState({
            kewWord: val
        })
    }
    keyUpHandle(){
        if (e.keyCode !== 13){
            return
        }
        hashHistory.push('search/all/' + encodeURIComponent(this.state.keyWord))
    }
}

export default HomeHeader