// //This is the entry point for the server

// import express from 'express';
// import pkg from 'body-parser';
// import cors from 'cors';
// /*===============================================================
//                         REQUIRE ROUTES
//         import featureRoute './routes/featureRoute';
// ===============================================================*/

// const app = express();
// const { json } = pkg;

// app.use(json());
// app.use(cors());

/* ===============================================================
                        USE ROUTES
        app.use('/api/feature'. featureRoute);
===============================================================*/
import app from "./app.js";


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server successfully running on port ${PORT}`)
});