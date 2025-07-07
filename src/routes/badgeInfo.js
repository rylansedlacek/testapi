const express = require('express');
const router = express.Router();
const badgesData = require('../data/badges.json');

router.get('/badgeinfo', (req, res) => {
    const givenName = req.query.givenname;
    const surname = req.query.surname;
    const scanTs = req.query.scan_ts || req.query.SCAN_TS;
    const scanTsUtc = req.query.scan_ts_utc || req.query.SCAN_TS_UTC;

    // validate required parameters
    if (!givenName || !surname || !scanTs || !scanTsUtc) {
        return res.status(400).json({
            Results: [
                {
                    Error: 400,
                    Message: "Missing required parameters."
                }
            ]
        });
    }

    // Find the badge information by Given Name and Surname
    const badgeInfo = badgesData.badges.find(
        badge => badge["Given Name"].toLowerCase() === givenName.toLowerCase() &&
                 badge["Surname"].toLowerCase() === surname.toLowerCase()
    );

    if (!badgeInfo) {
        return res.status(404).json({
            Results: [
                {
                    Error: 404,
                    Message: "Badge not found."
                }
            ]
        });
    }

    // Return the badge information
    res.json({
        Results: badgeInfo
    });
});

module.exports = router;