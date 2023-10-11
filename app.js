const express = require('express');
const menuRouter = require('./routes/menu');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')))
app.use(menuRouter);

app.listen(3000);