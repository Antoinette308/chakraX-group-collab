/* ==================================================================
                    ES6 SYNTAX IMPORTS
================================================================== */
import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import todoRoute from './features/todo-page/routes/todo-routes.js'
/*===============================================================
                        REQUIRE ROUTES
        import featureRoute './routes/featureRoute';
===============================================================*/

const app = express();
const { json } = pkg;

app.use(json());
app.use(cors());

// Export the app instance
export default app;

/* ===============================================================
                        USE ROUTES
        app.use('/feature', featureRoute);
===============================================================*/
app.use('/todo', todoRoute)