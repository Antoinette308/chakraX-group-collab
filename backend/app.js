
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

const app = express();
const { json } = pkg;

app.use(json());
app.use(cors());

/* ===============================================================
                        USE ROUTES
        app.use('/api/feature'. featureRoute);
===============================================================*/


export default app;