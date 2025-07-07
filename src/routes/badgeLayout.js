const express = require('express');
const router = express.Router();

router.get('/badgelayout', (req, res) => {
    res.json({
        Results: [
            { FieldName: "Given Name", Length: 100 },
            { FieldName: "Visitor Type", Length: 50 },
            { FieldName: "Surname", Length: 100 },
            { FieldName: "Assigned Rep", Length: 100 },
            { FieldName: "Role", Length: 100 }
        ]
    });
});

module.exports = router;

/*
Badge Number
Show Code
First Name
Last Name
Company
*/