//This is the entry point for the server

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

/* ===============================================================
                        USE ROUTES
        app.use('/api/feature'. featureRoute);
===============================================================*/
app.use('/todo', todoRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server successfully running on port ${PORT}`)
});