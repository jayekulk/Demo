sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"Project1/model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("Project1.controller.master", {
		formatter: formatter,
		/*onPress: function(oEvent) {
			var oItem, oCtx;

			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext("Product");

			this.getOwnerComponent().getRouter().navTo("Detail", {
				view2 : oCtx.getProperty("ProductId")

			});

		}*/
		 onPress: function(oEvent) {
      var oItem = oEvent.getSource(); //Get the Selected Item
      var oRouter = sap.ui.core.UIComponent.getRouterFor(this); //Get Hold of Router
      //Navigate to Detail Page with Selected Item Binding Context
      oRouter.navTo("Detail", {
        view2: encodeURIComponent(oItem.getBindingContext("Product").getPath().substr(1))
      });
    }

	});

});