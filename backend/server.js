//This is the entry point for the server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
/*===============================================================
                        REQUIRE ROUTES
        const featureRoute = require('./routes/featureRoute');
===============================================================*/

const app = express();

app.use(bodyParser.json());
app.use(cors());

/* ===============================================================
                        USE ROUTES
        app.use('/api/feature'. featureRoute);
===============================================================*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server successfully running on port ${PORT}`)
});