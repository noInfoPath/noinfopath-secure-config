var _config = {
		"common": {},

		"debug": {
			"google": {
				"projectId": "hsl-sop",
				"gcs": {
					"ops": {
						"keyFilename": ".private.prod.json",
						"bucket": "hsl-sop-bucket/ops",
						"path": ".private.json"
					}
				}
			}

		},

		"prod": {
			"google": {
				"projectId": "alert-result-167912",
				"gcs": {
					"ops": {
						"keyFilename": ".private.prod.json",
						"bucket": "hsl-sop-ops",
						"path": ".private.json"
					}
				}
			}

		}
	},
	_platform = Boolean(Number(process.env.NOINFOPATHDEBUG)) ? "debug" : "prod",
	_final = Object.assign({
		platform: _platform
	}, _config.common, _config[_platform]);

//console.log(_final);

module.exports = _final;
