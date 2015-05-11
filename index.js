'use strict';

exports.stringAfter = function(formattedString) {
	return formattedString.replace(/\n*$/, '\n');
};
