/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
/*===============================================================
                        REQUIRE ROUTES
        import featureRoute './routes/featureRoute';
===============================================================*/
import habitRoute from './features/habitTracker-page/routes/habitTracker-route.js';


const app = express();
const { json } = pkg;

app.use(json());
app.use(cors());

/* ===============================================================
                        USE ROUTES
        app.use('/api/feature'. featureRoute);
===============================================================*/

app.use('/habit-tracker', habitRoute);

export default app;