const bodyParser =require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var items = [{item: 'run in the forest'},{item: 'watch tutorials'},{item: 'practice node.js'}]

module.exports = function(app){

  app.get('/', (req,res)=>{
    res.render('index', {data: items});
  })

  app.post('/todo', urlencodedParser, (req,res)=>{
    var postedItem = req.body;
    items.push({item: req.body.item});
    res.render('index', {data: items});
  })

  app.delete('/todo/:index',(req,res)=>{
    console.log(req.params.index);
    items.splice(items.length-1-req.params.index, 1);
  })
}
