/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  // if auth pass next()
  if(!req.session.isAuthenticated) {
    res.render('index', {
        title: 'MSAL Node & Express Web App',
        isAuthenticated: req.session.isAuthenticated,
        username: req.session.account?.username,
    });
  } else {
    next();
  }
});

module.exports = router;