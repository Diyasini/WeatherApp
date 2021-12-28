const express = require("express");
const request = require("request");

const app=express();
const port = process.env.PORT||3000;
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.get('/' , async(req,res) => {
   res.render('index')
})

const PORT= 3000;
app.listen(process.env.PORT || 3000, () => console.log("Server running on port "+PORT))

//app.listen(PORT, () => console.log('Server running on port '+ PORT));