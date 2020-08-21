sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"zchatChatBotApp/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("zchatChatBotApp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.getMyChatBot();
		},
		
		getMyChatBot: function(){
			// cross check if element 'webchat' is there
			if(!document.getElementById("webchat")){
				var oNewElement = document.createElement("script");
				oNewElement.setAttribute("id", "webchat");
				oNewElement.setAttribute("src", "https://cdn.cai.tools.sap/webchat/webchat.js");
				document.body.appendChild(oNewElement);
				oNewElement.setAttribute("channelId", "b32bd1e2-29ee-4b4c-b771-dbaa03daf825");
				oNewElement.setAttribute("token", "6e79ec23ad64ad125918837ee0e75eec");
			}
		}
	});
});