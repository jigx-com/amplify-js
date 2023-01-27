'use strict';
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, '__esModule', { value: true });
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var core_1 = require('@aws-amplify/core');
var PushNotification_1 = __importDefault(require('./PushNotification'));
var _instance = new PushNotification_1.default(null);
exports.PushNotification = _instance;
core_1.Amplify.register(exports.PushNotification);
//# sourceMappingURL=index.js.map
