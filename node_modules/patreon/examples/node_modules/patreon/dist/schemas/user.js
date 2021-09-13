'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var constants = {
    attributes: {
        email: 'email',
        first_name: 'first_name',
        last_name: 'last_name',
        full_name: 'full_name',
        gender: 'gender',
        status: 'status',
        vanity: 'vanity',
        about: 'about',
        facebook_id: 'facebook_id',
        image_url: 'image_url',
        thumb_url: 'thumb_url',
        thumbnails: 'thumbnails',
        youtube: 'youtube',
        twitter: 'twitter',
        facebook: 'facebook',
        twitch: 'twitch',
        is_suspended: 'is_suspended',
        is_deleted: 'is_deleted',
        is_nuked: 'is_nuked',
        created: 'created',
        url: 'url',
        like_count: 'like_count',
        comment_count: 'comment_count',
        is_creator: 'is_creator',
        hide_pledges: 'hide_pledges',
        two_factor_enabled: 'two_factor_enabled'
    },
    relationships: {
        pledges: 'pledges',
        cards: 'cards',
        follows: 'follows',
        campaign: 'campaign',
        presence: 'presence',
        session: 'session',
        locations: 'locations',
        current_user_follow: 'current_user_follow',
        pledge_to_current_user: 'pledge_to_current_user'
    }
};

exports.default = _extends({}, constants, {
    default_attributes: [constants.attributes.email, constants.attributes.first_name, constants.attributes.last_name, constants.attributes.full_name, constants.attributes.gender, constants.attributes.status, constants.attributes.vanity, constants.attributes.about, constants.attributes.facebook_id, constants.attributes.image_url, constants.attributes.thumb_url, constants.attributes.thumbnails, constants.attributes.youtube, constants.attributes.twitter, constants.attributes.facebook, constants.attributes.twitch, constants.attributes.is_suspended, constants.attributes.is_deleted, constants.attributes.is_nuked, constants.attributes.created, constants.attributes.url],
    default_relationships: [constants.relationships.campaign, constants.relationships.pledges]
});