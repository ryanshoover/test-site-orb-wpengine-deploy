const path = require( 'path' ),
	config = {},
	processArgs = {};

// Set up arguments passed in from the command line.
process.argv.forEach( ( argStr ) => {
	const arg = argStr.split( '=' );

	// Skip if this is a path declaration.
	if ( 0 === arg[ 0 ].indexOf( '/' ) ) {
		return;
	}

	arg[ 0 ] = arg[ 0 ].replace( /^\-\-/, '' );

	if ( arg[ 1 ] || false ) {
		processArgs[ arg[ 0 ] ] = arg[ 1 ];
	} else {
		processArgs[ arg[ 0 ] ] = true;
	}
} );

// Find our base directory.
config.backstopDir = path.relative( process.cwd(), __dirname );

// Define helpful parameter strings.
config.geoip = {
	us: '?geoip&country=US',
	gb: '?geoip&country=GB',
};

config.viewports = {
	desktop: {
		// High-def screen
		label: 'desktop',
		width: 1920,
		height: 1080,
	},
	tablet: {
		// iPad
		label: 'tablet',
		width: 768,
		height: 1024,
	},
	mobile: {
		// iPhone 7/8
		label: 'mobile',
		width: 375,
		height: 667,
	},
};

if ( process.env.CI || false ) {
	// Define CI defaults if we're in a CI environment.
	config.reports = [ 'CI' ];
	config.reportsDir = path.resolve( process.cwd(), './test-results/' );
} else {
	// Define CI defaults if we're testing locally.
	config.reports = [ 'browser' ];
	config.reportsDir = path.resolve( config.backstopDir, './results' );
}

// Allow config overrides with CLI processArgs.
config.url = processArgs.url || 'https://dotcomstg.wpengine.com';
config.refUrl = processArgs.refurl || 'https://wpengine.com';
config.reports = processArgs.reports ? processArgs.reports.split( ',' ) : config.reports;
config.reportsDir = processArgs.reports_dir || config.reportsDir;
config.debug = processArgs.debug || false;
config.debugWindow = processArgs.debugWindow || false;

module.exports = config;
