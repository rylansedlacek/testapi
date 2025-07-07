const express = require('express');
const bodyParser = require('body-parser');
const badgeLayoutRoute = require('./routes/badgeLayout');
const badgeInfoRoute = require('./routes/badgeInfo');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', badgeLayoutRoute);
app.use('/api', badgeInfoRoute);

app.listen(PORT, () => {
    console.log(`running on http://localhost:${PORT}`);
});

app.get('/test', (req, res) => {
    res.send('API is working');
});