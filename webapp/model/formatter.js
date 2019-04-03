sap.ui.define(function() {
	"use strict";
 
	var Formatter = {
 
		quantity :  function (sQuantity) {
				if (sQuantity > "5") {
					return "Success";
			
				} else {
					return "Error";
				}
		}
	};
 
	return Formatter;
 
}, /* bExport= */ true);