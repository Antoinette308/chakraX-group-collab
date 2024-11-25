import express from 'express';
import pkg from 'body-parser';
import cors from 'cors';
import journalRoutes from './routes/journal.route.js';
/*===============================================================
                        REQUIRE ROUTES
        import featureRoute './routes/featureRoute';
===============================================================*/

const app = express();
const { json } = pkg;

app.use(json());
app.use(cors());

app.use('/', (req,res) => {
        res.send("You're cute")
})
app.use('/journal', journalRoutes);

export default app;