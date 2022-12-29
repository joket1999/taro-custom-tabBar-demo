const config = {
	projectName: 'buy-ticket',
	date: '2022-09-05',
	designWidth: 750,
	deviceRatio: {
		640: 2.34 / 2,
		750: 1,
		828: 1.81 / 2
	},
	sourceRoot: 'src',
	outputRoot: 'dist',
	defineConstants: {},
	copy: {
		patterns: [],
		options: {}
	},
	framework: 'react',
	mini: {
		webpackChain(chain, webpack) {
			chain.optimization.sideEffects(false);
		},
		miniCssExtractPluginOption: {
			//忽略css文件引入顺序警告
			ignoreOrder: true
		},
		postcss: {
			pxtransform: {
				enable: true,
				config: {}
			},
			url: {
				enable: true,
				config: {
					limit: 4096 // 设定转换尺寸上限
				}
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: 'module', // 转换模式，取值为 global/module
					generateScopedName: '[name]__[local]___[hash:base64:5]'
				}
			}
		}
	},
	h5: {
		publicPath: '/',
		staticDirectory: 'static',
		postcss: {
			autoprefixer: {
				enable: true,
				config: {}
			},
			pxtransform: {
				enable: true,
				config: {
					onePxTransform: true,
					unitPrecision: 2,
					propList: ['*'],
					selectorBlackList: [],
					replace: true,
					mediaQuery: false,
					minPixelValue: 0
				}
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: 'module', // 转换模式，取值为 global/module
					generateScopedName: '[name]__[local]___[hash:base64:5]'
				}
			}
		}
	}
};

module.exports = function (merge) {
	if (process.env.NODE_ENV === 'development') {
		return merge({}, config, require('./dev'));
	}
	return merge({}, config, require('./prod'));
};
