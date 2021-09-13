'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var constants = {
    attributes: {
        amount_cents: 'amount_cents',
        title: 'title',
        description: 'description',
        created_at: 'created_at',
        reached_at: 'reached_at'
    },
    relationships: {}
};

exports.default = _extends({}, constants, {
    default_attributes: [constants.attributes.amount_cents, constants.attributes.title, constants.attributes.description, constants.attributes.created_at, constants.attributes.reached_at],
    default_relationships: []
});