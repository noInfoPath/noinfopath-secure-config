var utils = require("util"),
	path = require("path"),
	chai = require("chai"),
	expect = chai.expect,
	chaiAsPromised = require("chai-as-promised"),

	googleConfig = require("./fixtures/config.json"),
	SecureAppConfig = require("../index");

chai.use(chaiAsPromised);
chai.should();

describe("Testing hsl-sop-app-config", function () {
	var appConfig = null;

	before(function () {
		appConfig = new SecureAppConfig(googleConfig);
	});

	it("`new SecureAppConfig(config)` should return an instance of SecureAppConfig", function () {
		expect(appConfig).to.not.be.null;

		appConfig.should.be.an.instanceof(SecureAppConfig)
			.and.;
	});

	it("should return the `appConfig` interface", function () {
		return appConfig.init()
			.then(function () {
				console.log(appConfig);
			})
			.catch(function (err) {
				console.error(err);
			});
	});

	it("should have a `rest` property", function () {
		assert(appConfig.rest);
	});

	it("should have a `db` property", function () {
		assert(appConfig.db);
	});

	it("should have a `google` property", function () {
		assert(appConfig.google);
	});

	it("should have a `google` property, `gmail`", function () {
		assert(appConfig.google.gmail);
	});

	it("should have a `google` property, `gmail.installed`", function () {
		assert(appConfig.google.gmail.installed);
	});

	it("should have a `google` property, `gmail.installed`", function () {
		assert(appConfig.google.gmail.refresh);
	});

	it("should have a `google` property, `maps`", function () {
		assert(appConfig.google.maps);
	});

	it("should have a `google` property, `maps.places`", function () {
		assert(appConfig.google.maps.places);
	});

	it("should have a `google` property, `maps.geocode`", function () {
		assert(appConfig.google.maps.geocode);
	});

	it("should have a `google` property, `gcs`", function () {
		assert(appConfig.google.gcs);
	});

	it("should have a `nodemailer` property", function () {
		assert(appConfig.nodemailer);
	});

	it("should have a `serveManager` property", function () {
		assert(appConfig.serveManager);
	});

	it("should have a `msapis` property", function () {
		assert(appConfig.msapis);
	});

	it("should have a `aad` property", function () {
		assert(appConfig.aad);
	});

	it("should have a `auth0` property", function () {
		assert(appConfig.auth0);
	});


});
