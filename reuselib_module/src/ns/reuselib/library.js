/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library ns.reuselib.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * 
		 *
		 * @namespace
		 * @name ns.reuselib
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "ns.reuselib",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			noLibraryCSS: true,
			types: [],
			interfaces: [],
			controls: [
				"ns.reuselib.controls.Example"
			],
			elements: []
		});

		/* eslint-disable */
		// @ts-ignore
		return ns.reuselib;
		/* eslint-enable */

	}, /* bExport= */ false);