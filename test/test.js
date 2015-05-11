'use strict';

var assert = require('assert');

var mocha = require('mocha');

var eolFormatter = require('../');

mocha.describe('EOL-last formatter', function() {
	var expectedOutput = 'Hi!\n';

	mocha.it('adds newline at end of input', function() {
		// Given.
		var input = 'Hi!';

		// When
		var formatterOutput = eolFormatter.stringAfter(input);

		// Then
		assert(formatterOutput, expectedOutput);
	});

	mocha.it('does not add an extra newline at end of input with a newline', function() {
		// Given.
		var input = 'Hi!\n';

		// When
		var formatterOutput = eolFormatter.stringAfter(input);

		// Then
		assert(formatterOutput, input);
	});

	mocha.it('removes extraneous newlines at end of input', function() {
		// Given.
		var input = 'Hi!\n\n\n';

		// When
		var formatterOutput = eolFormatter.stringAfter(input);

		// Then
		assert(formatterOutput, expectedOutput);
	});
});
