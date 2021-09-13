'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonApiURL = exports.patreon = exports.oauth = undefined;

var _oauth = require('./oauth');

var _oauth2 = _interopRequireDefault(_oauth);

var _patreon = require('./patreon');

var _patreon2 = _interopRequireDefault(_patreon);

var _jsonapiUrl = require('./jsonapi-url');

var _jsonapiUrl2 = _interopRequireDefault(_jsonapiUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.oauth = _oauth2.default;
exports.patreon = _patreon2.default;
exports.jsonApiURL = _jsonapiUrl2.default;