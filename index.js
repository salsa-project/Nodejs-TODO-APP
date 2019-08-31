const express = require('express');
const todoHandler = require('./controllers/todo')

const app = express();

//set Port server
const PORT = process.env.PORT || 5000;

//set template engine
app.set('view engine', 'ejs');

//serve the calls that request any file inside "views" folder
app.use(express.static('views'));

//handle todo requests
todoHandler(app);

//serve responses on PORT
app.listen(PORT,()=>console.log(`Server Running On : ${PORT}`));
