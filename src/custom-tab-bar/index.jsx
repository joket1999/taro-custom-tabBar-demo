import { Component } from 'react';
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { connect } from 'react-redux';

import './index.scss';

export default class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: 0,
			color: '#000000',
			selectedColor: 'red',
			list: [
				{
					pagePath: '/pages/index/index',
					text: '首页'
				},
				{
					pagePath: '/pages/ticket/ticketList',
					text: '购票'
				},
				{
					pagePath: '/pages/order/orderList',
					text: '订单'
				}
			]
		};
	}

	switchTab(index, item) {
		Taro.switchTab({ url: item.pagePath });
	}

	setSelected(pageIndex) {
		this.setState({
			selected: pageIndex
		});
	}

	render() {
		const { list, selected, color, selectedColor } = this.state;

		return (
			<View className="tab-bar">
				<View className="tab-bar-border"></View>
				{list.map((item, index) => {
					return (
						<View
							key={index}
							className="tab-bar-item"
							onClick={() => {
								this.switchTab(index, item);
							}}
						>
							<View style={{ color: selected === index ? selectedColor : color }}>{item.text}</View>
						</View>
					);
				})}
			</View>
		);
	}
}
