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
            data:[],
            hasMore: false
        }
    }
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                <div>
                    {this.state.data.toString()}
                </div>

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