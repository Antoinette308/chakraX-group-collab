//This is the entry point for the server

import app from './app.js'

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server successfully running on port ${PORT}`)
});