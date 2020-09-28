const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!date)	return 'Unable to determine the time of year!';
	
	if (!date instanceof Date || !date.getTime()) return "Error";
	
	let seasons = ['spring', "summer", 'autumn', "winter"];
	let month = date.getMonth();
			
	return month < 2 || month === 11 ? seasons[3] : month >= 2 && month < 5 ? seasons[0] : month >= 5 && month < 8 ? seasons[1] : month >= 8 && month < 11 ? seasons[2] : null;
  
  
};
