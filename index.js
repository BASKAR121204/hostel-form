var express = require('express');
const { register } = require('module');
var app = express();
var path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,"index.html"));
})

app.post('/process_get',(req,res)=>{
   const {first_name,last_name,room_no,college,dpt,year,register_no} = req.body;
//    console.log(req.body);
   let response={
    first_name:first_name,
    last_name:last_name,
    room_no:room_no,
    college:college,
    department:dpt,
    year:year,
    register_no:register_no
   };
    console.log(response);
   //  console.log(response.first_name,response.last_name);
    res.end(JSON.stringify(response));
})
var server = app.listen(process.env.PORT || 5000, function () {
    console.log("Express App running at http://127.0.0.1:" + server.address().port);
 });