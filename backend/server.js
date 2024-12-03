//This is the entry point for the server

import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import energyRoutes from "./features/energy-tracker-page/routes/energy-route.js"
/*===============================================================
                        REQUIRE ROUTES
        import featureRoute './routes/featureRoute';
===============================================================*/
const { json } = pkg;
const app = express();

app.use(json());
app.use(cors());
app.use('/energy-tracker', energyRoutes)

/* ===============================================================
                        USE ROUTES
        app.use('/api/feature'. featureRoute);
===============================================================*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server successfully running on port ${PORT}`)
});