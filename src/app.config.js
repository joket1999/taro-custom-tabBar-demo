export default {

	lazyCodeLoading: 'requiredComponents',

	pages: [
		'pages/index/index',
		'pages/order/orderList',
		'pages/ticket/ticketList',
	],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: '',
		navigationBarTextStyle: 'black',
		navigationStyle: 'default',
		onReachBottomDistance: 80
	},
	tabBar: {
		custom: true,
		backgroundColor: '#fafafa',
		borderStyle: 'white',
		selectedColor: '#fe3a4c',
		color: '#666',
		list: [
			{
				pagePath: 'pages/index/index',
				text: '首页'
			},
			{
				pagePath: 'pages/ticket/ticketList',
				text: '购票'
			},
			{
				pagePath: 'pages/order/orderList',
				text: '订单'
			}
		]
	},
	networkTimeout: {
		request: 10000,
		downloadFile: 10000
	},
	debug: true
};
