module.exports = async( page, scenario ) => {
	console.log( 'SCENARIO > ' + scenario.label ); // eslint-disable-line no-console
	await require( './clickAndHoverHelper' )( page, scenario );
	await require( './formSubmission' )( page, scenario );
};
