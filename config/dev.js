const ENV = process.env.TARO_ENV;
let outputRoot = ENV === 'weapp' ? './build/weapp' : './build/tt';
// let outputRoot = ENV === 'weapp' ? '../../../../../../mnt/hgfs/buy-ticket/dist' : '../../../../../../mnt/hgfs/buy-ticket/ticket';
module.exports = {
	env: {
		NODE_ENV: '"development"'
	},
	outputRoot,
	defineConstants: {
	},
	mini: {},
	h5: {}
}
