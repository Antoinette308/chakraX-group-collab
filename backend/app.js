
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
import authRoutes from './features/authentication/routes/auth-route.js';
import energyRoutes from "./features/energy-tracker-page/routes/energy-route.js"

const app = express();
const { json } = pkg;

app.use(json());
app.use(cors());

/* ===============================================================
                        USE ROUTES
        app.use('/api/feature'. featureRoute);
===============================================================*/
app.use('/accounts', authRoutes);
app.use('/energy-tracker', energyRoutes);

export default app;