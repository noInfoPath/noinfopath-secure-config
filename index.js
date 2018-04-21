/*
 *	# hsl-sop-app-config
 *
 *	This module reretrieves all of the secure passwords, private keys, etc for
 *	the HSL SOP modules from a Google Cloud Storage bucket secured
 *	by one of the two OAuth Key stored here is this project. This is the singular
 *	place the keys can b efound. These keys nor this project should ever be
 *	shared by anyone working on HSP SOP.
 *
 *	## Install
 *
 *	This module is NOT published to the NPM repository. Instead you should clone
 *	this project to a folder relative to the module you are working on, then
 *	NPM install as a relative fould.  (See below.)
 *
 *	```
 	npm install ../hsl-sop-app-config --save
 *	```
 *
 *	## Usage
 *
 *	```js
 *	var appConfigInit = require("hsl-sop-app-config");
 *
 *	 appConfigInit()
 *		 .then(function(ac){
 *			 appConfig = ac;
 *			 done();
 *		 })
 *		 .catch(function(err){
 *			 console.error(err);
 *			 done(err);
 *		 })
 *	```
*/


var authenticate = require("./api-auth");

function SecureAppConfig(config) {
	this._saveCreds = function (creds) {
		Object.keys(creds).forEach(function (k) {
			this[k] = creds[k];
		}.bind(this));
	};

	this.init = function () {
		return authenticate(config)
			.then(this._saveCreds.bind(this))
			.catch(function (err) {
				throw err;
			})
	}
}


module.exports = SecureAppConfig;
