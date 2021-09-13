'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isPlainObject = require('is-plain-object');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _encode = function _encode(value) {
    return Array.isArray(value) && !value.length ? '[]' : encodeURI(value);
};

var encodeParam = function encodeParam(value, key) {
    if ((0, _isPlainObject2.default)(value)) {
        return Object.keys(value).reduce(function (memo, _key) {
            return '' + memo + key + '[' + _key + ']=' + _encode(value[_key]) + '&';
        }, '');
    } else {
        return key + '=' + _encode(value) + '&';
    }
};

var encodeParams = function encodeParams(params) {
    if (!params) return '';
    return Object.keys(params).reduce(function (memo, key) {
        return '' + memo + encodeParam(params[key], key);
    }, '');
};

function jsonApiURL(url, _params) {
    var separator = url.includes('?') ? '&' : '?';

    var params = _params ? encodeParams(_params) : '';

    return '' + url + separator + params;
}

exports.default = jsonApiURL;