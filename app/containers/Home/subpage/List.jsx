import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'
import ListCompoent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data:[], // 存储列表信息
            hasMore: true, // 记录当前状态下是否有更多数据可供加载
            isLoadingMore: false, // 是否正在加载新数据
            page: 1 // 下一页的页码
        }
    }
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                    ? <ListCompoent data={this.state.data}/>
                    : <div>加载中...</div>                    
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : <div></div>
                }
            </div>
        )
    }
    componentDidMount() {
        // 获取首页数据
        this.loadFirstPageDate()
    }
    loadFirstPageDate(){
        const cityName = this.props.cityName
        const result = getListData(cityName, 0)
        this.resultHandle(result)
    }
    // 加载更多数据
    loadMoreData(){
        // 用到this.resultHandle

    }
    // 处理数据
    resultHandle(result){
        result.then(res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data
            this.setState({
                data: data,
                hasMore: hasMore
            })
        })
    }
}


export default List