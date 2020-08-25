const path = require( 'path' );
const config = require( './config' );
const scenarios = require( './scenarios' );

module.exports = {
	id: 'backstop',
	scenarios: scenarios,
	viewports: [
		config.viewports.desktop,
		config.viewports.mobile,
	],
	onBeforeScript: 'puppet/onBefore.js',
	onReadyScript: 'puppet/onReady.js',
	paths: {
		engine_scripts: path.resolve( config.backstopDir, './engine_scripts' ),
		bitmaps_reference: path.resolve( config.reportsDir, './reference' ),
		bitmaps_test: path.resolve( config.reportsDir, './test' ),
		html_report: path.resolve( config.reportsDir, './html_report' ),
		ci_report: path.resolve( config.reportsDir, './ci_report' ),
	},
	ci: {
		format: 'junit',
		testReportFileName: 'results',
		testSuiteName: 'backstopJS',
	},
	report: config.reports,
	engine: 'puppetter',
	engineOptions: {
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
		],
	},
	asyncCaptureLimit: 5,
	debug: config.debug || false,
	debugWindow: config.debugWindow || false,
};
