/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const express = require('express');
const axios = require('axios');
const router = express.Router();

const { GRAPH_ME_ENDPOINT } = require('../authConfig');

router.get('/profile', async function (req, res, next) {
    try {
        const graphResponse = await axios.get(GRAPH_ME_ENDPOINT, {
            headers: {
                'Authorization': `Bearer ${req.session.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        const profile = graphResponse.data;
        res.status(200).send(profile);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = router;