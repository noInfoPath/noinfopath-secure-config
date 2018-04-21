var utils = require("util"),
	path = require("path"),
	chai = require("chai"),
	expect = chai.expect,
	chaiAsPromised = require("chai-as-promised"),
	appConfigFixture = require("./fixtures/app-config"),
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

		appConfig.should.be.an.instanceof(SecureAppConfig);

	});

	it("should return the `appConfig` interface", function () {
		var keys = Object.keys(appConfigFixture);

		return appConfig.init().should.eventually.include.keys(keys);
	});
});
