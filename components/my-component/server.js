'use strict';

module.exports.data = function(context, callback){
	callback(null, {
		path:context.staticPath,
		init: {
			to: context.params.to || 7015400,
			from: context.params.from || 8727100,
			depart: context.params.depart || '01/01/1900',
			return: context.params.return || '01/01/1901',
			point_of_sale: context.params.point_of_sale || "XXXXX"
		}
	});
};