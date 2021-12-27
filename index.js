const express = require("express");
const request = require("request");

const app=express();


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/' , async(req,res) => {
   res.render('index')
})

const PORT= 5000;

app.listen(PORT, () => console.log('Server running on port '+ PORT));