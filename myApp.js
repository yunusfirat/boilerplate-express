var express = require('express');
var app = express();

const PORT =  process.env.PORT || 3000;


console.log("Hello World")

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));





























 module.exports = app;
