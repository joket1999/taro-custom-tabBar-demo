import React, { PureComponent } from 'react';
import Taro, { getCurrentInstance } from '@tarojs/taro';
import { View } from '@tarojs/components';

const ENV_TYPE = Taro.getEnv();


class Page3 extends PureComponent {
	constructor(props) {
		super(props);
	}

	$instance = getCurrentInstance();

	componentDidShow() {
		if (ENV_TYPE === 'WEAPP') {
			const page = this.$instance.page;
			const tabbar = Taro.getTabBar(page);
			tabbar.setSelected(2);
		}
	}


	render() {

		return (
			<View>3</View>
		);
	}
}

export default Page3;
