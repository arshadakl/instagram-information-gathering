var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  // getDetails().then((respons)=>{
  //   let insta = respons.data
  //   console.log(insta);
  // })
  
    res.render('index')
});

module.exports = router;
