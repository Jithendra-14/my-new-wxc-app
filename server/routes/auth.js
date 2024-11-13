/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

var express = require('express');

const authProvider = require('../auth/AuthProvider');
const { REDIRECT_URI, POST_LOGOUT_REDIRECT_URI } = require('../authConfig');

const router = express.Router();

router.get('/signin', authProvider.login({
    scopes: ['User.Read', 'openid', 'profile', 'offline_access'],
    redirectUri: REDIRECT_URI,
    successRedirect: '/api/auth/acquireToken'
}));

router.get('/acquireToken', authProvider.acquireToken({
    scopes: ['User.Read'],
    redirectUri: REDIRECT_URI,
    successRedirect: '/'
}));

router.post('/redirect', authProvider.handleRedirect());

router.get('/signout', authProvider.logout({
    postLogoutRedirectUri: POST_LOGOUT_REDIRECT_URI
}));

router.get('/token', async (req, res) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.sendStatus(401);

    try {
        const tokenRequest = {
            scopes: ['User.Read'],
            oboAssertion: token,
        };

        const response = await cca.acquireTokenOnBehalfOf(tokenRequest);
        res.json({ token: response.accessToken });
    } catch (err) {
        console.error(err);
        res.status(401).send('Authentication failed');
    }
});

module.exports = router;