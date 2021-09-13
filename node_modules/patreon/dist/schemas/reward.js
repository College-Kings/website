'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var constants = {
    attributes: {
        amount_cents: 'amount_cents',
        user_limit: 'user_limit',
        remaining: 'remaining',
        description: 'description',
        requires_shipping: 'requires_shipping',
        created_at: 'created_at',
        url: 'url',
        patron_count: 'patron_count'
    },
    relationships: {
        creator: 'creator'
    }
};

exports.default = _extends({}, constants, {
    default_attributes: [constants.attributes.amount_cents, constants.attributes.user_limit, constants.attributes.remaining, constants.attributes.description, constants.attributes.requires_shipping, constants.attributes.created_at, constants.attributes.url, constants.attributes.patron_count],
    default_relationships: [constants.relationships.creator]
});