var path = require("path");

module.exports = function (config, keyPath) {
	if (typeof config !== "object") throw new TypeError("config is a required parameters.")

	var keyFilePath = keyPath || path.join(process.env.HOME, ".credentials", config.projectId, "gcs.json"),
		gcs = require('@google-cloud/storage')({
			projectId: config.projectId,
			keyFilename: keyFilePath
		}),
		bucket = gcs.bucket(config.gcs.ops.bucket),
		apiauth = bucket.file(config.gcs.ops.path);

	return apiauth.download()
		.then(function (data) {
			return JSON.parse(data.toString("utf-8"));
		})
		.catch(function (err) {
			return Promise.reject(err);
		});


};
