const config = require( '../config' );

exports.scenarios = [
	{
		label: 'Homepage',
		url: config.url + '/',
		referenceUrl: config.refUrl + '/',
		hideSelectors: [],
	},
];
