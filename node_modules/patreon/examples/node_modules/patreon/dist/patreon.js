'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _jsonapiDatastore = require('jsonapi-datastore');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function patreon(accessToken) {
    var store = new _jsonapiDatastore.JsonApiDataStore();

    var makeRequest = function makeRequest(requestSpec) {
        var normalizedRequest = (0, _utils.normalizeRequest)(requestSpec);
        var url = normalizedRequest.url;
        var options = _extends({}, normalizedRequest, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
                'User-Agent': (0, _utils.userAgentString)()
            },
            credentials: 'include'
        });
        var _response = undefined;

        return (0, _isomorphicFetch2.default)(url, options).then(function (response) {
            _response = response;
            return (0, _utils.checkStatus)(response);
        }).then(_utils.getJson).then(function (rawJson) {
            store.sync(rawJson);
            return { store: store, rawJson: rawJson, response: _response };
        }).catch(function (error) {
            return Promise.reject({ error: error, response: _response });
        });
    };

    makeRequest.getStore = function () {
        return store;
    };

    makeRequest.setStore = function (newStore) {
        store = newStore;
    };

    return makeRequest;
}

exports.default = patreon;