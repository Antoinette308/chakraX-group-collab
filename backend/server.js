//This is the entry point for the server

import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
/*===============================================================
                        REQUIRE ROUTES
        const featureRoute = require('./routes/featureRoute');
===============================================================*/

const app = express();

app.use(json());
app.use(cors());

/* ===============================================================
                        USE ROUTES
        app.use('/api/feature'. featureRoute);
===============================================================*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server successfully running on port ${PORT}`)
});