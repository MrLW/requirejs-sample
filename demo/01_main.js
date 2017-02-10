/**
 * 主模块
 */

(function() {

	// 添加其它模块依赖:这个是子模块和主模块之间在同级目录，第一种
	/*require(['jquery', 'moduleA'], function($, A) {
		console.log($);
		console.log(A)
	});*/
	// 第二种
	/*require.config({
		paths: {
			'jquery': '../lib/jquery',
			'moduleA': '../lib/moduleA',
		}
	});*/

	// 第三种
	require.config({
		baseUrl: '../lib',
		paths: {
			'jquery':  'jquery',
			'moduleA': 'moduleA',
		}
	});

	require(['jquery', 'moduleA'], function($, A) {
		console.log($);
		console.log(A)
	})

})()