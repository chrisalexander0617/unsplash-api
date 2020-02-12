const express = require('express');
const app = express();
const request = require('request');



app.set('view engine', 'ejs');


const key = 'fe176f661e59b5ca643517d5e8c5566eefecb015c0762f0fdb286cc959c63044';


app.get('/', function(req, res){
    res.render('search');
})



app.get('/results', function(req, res){



    var query = req.query.search;
    const url = 'https://api.unsplash.com/search/photos?query=' + query + '&client_id=fe176f661e59b5ca643517d5e8c5566eefecb015c0762f0fdb286cc959c63044';
    

    request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
     
             const data = JSON.parse(body)

           
            //res.send(data["results"][1])
             //res.send(data["results"][1]["urls"]["raw"])
             res.render("results", {data: data})
             //res.send(dataJSON["location"] + " " + dataJSON["carrier"]);



    
        } else {
            console.log('error')
        }

    })

   
})








app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log('Application started')
})
