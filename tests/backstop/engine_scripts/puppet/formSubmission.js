module.exports = async( page, scenario ) => {
	const formFields = scenario.formFields || false;

	if ( ! formFields ) {
		return;
	}

	// Fill out the form
	for ( const action in formFields ) {
		for ( const selector in formFields[ action ] ) {
			await page[ action ]( selector, formFields[ action ][ selector ] );
		}
	}

	// Click the submit button and wait for the message to appear.
	// Disabled as it's buggy in Puppeteer
	// await page.click( '.wpe-form__submit' );
	// await page.waitForSelector(
	// 	'.wpe-form__message--visible',
	// 	{
	// 		visible: true,
	// 		timeout: 0,
	// 	}
	// );
};
