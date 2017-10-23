import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="home-header clear-fix">
                <div className="header-left float-left">
                    <span>{this.props.cityName}</span>
                    <i className="icon-angle-down"></i>
                </div>
                <div className="header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="header-middle">
                    <i className="icon-search"></i>
                    <input placeholder="请输入关键字"/>
                </div>
            </div>
        )
    }
}

export default HomeHeader