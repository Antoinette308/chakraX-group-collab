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
import habitRoute from './features/habitTracker-page/routes/habitTracker-route.js';
import journalRoutes from './features/journal-page/routes/journal-route.js';
import todoRoute from './features/todo-page/routes/todo-routes.js'
import rewardsRoute from './features/rewardsSystem-page/routes/rewardsSystem-route.js';


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
app.use('/habit-tracker', habitRoute);
app.use('/journal', journalRoutes);
app.use('/todo', todoRoute);
app.use('/rewards-system', rewardsRoute);


export default app;