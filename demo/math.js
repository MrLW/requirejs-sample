// amd规范必须使用define函数来定义

define(function() {
	var add = function(x, y) {
		return x + y;
	};

	return {
		add: add
	} ;
})