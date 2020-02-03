const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

//Install the middleware needed for express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./app'))

//Connect the route to our htmlRoutes
const htmlRoute = require('./routes/htmlRoutes');
app.use('/', htmlRoute);


//Listening to PORT
app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`)
})