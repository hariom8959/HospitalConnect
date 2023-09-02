const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/selfchecking', require('./routes/routes.js'));
app.listen(PORT, () => console.log(`Listenin' on port ${PORT}`));