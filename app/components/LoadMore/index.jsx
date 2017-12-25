import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    loadMoreHandle(){
        this.props.loadMoreFn();
    }
    componentDidMount() {
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        /* 节流所用 */
        let timeOutId
        window.addEventListener('scroll', function(){
            if (this.props.isLoadingMore) return;
            if (timeOutId){
                clearTimeout(timeOutId)
            }
            timeOutId = setTimeout(callback, 50)
        }.bind(this), false);
        function callback(){
            // 距离页面顶部
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height
            console.log(top, windowHeight)
            if (top && top < windowHeight){
                // 当 wrapper 已经被滚动到暴露在页面的可是范围之内的时候触发
                loadMoreFn()
            }
        }
    }
    
}


export default LoadMore