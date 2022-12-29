import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Taro, { getCurrentInstance } from '@tarojs/taro';
import dva from './dva';

const ENV_TYPE = Taro.getEnv();

const dvaApp = dva.createApp({
	initialState: {},
	models: [],
	onError(e, dispatch) {
		console.log('系统出错了!');
		// dispatch(action("sys/error", e));
	}
});
const store = dvaApp.getStore();

class App extends Component {

	$instance = getCurrentInstance();

	constructor(props) {
		super(props);

	}

	componentDidHide() {}

	componentDidCatchError() {}

	render() {
		return <Provider store={store}>{this.props.children}</Provider>;
	}
}

export default App;
