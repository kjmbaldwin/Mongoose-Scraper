var cheerio = require('cheerio');
var request = require('request');

var db = require('../models');

var scrape = function (req, res){

  request("https://www.reddit.com/r/webdev", function(error, response, html) {

    var $ = cheerio.load(html);
    var result = {};

    $("p.title").each(function(i, element) {

      result.title = $(this).text();
      result.link = $(this).children().attr("href");

      db.Headline.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err) {
          return res.json(err);
        });


    });

    console.log(result);
  });

  res.send("all done!");
};

var handlebars = function(req, res){
    
  // burger.selectAll(function(data){
  //     var handlebarsObj = {
  //       burgers: data
  //     };
  //     res.render("index", handlebarsObj);
  //   });
  

  db.Headline.find({})
  .then(function(data) {

    console.log(data);
    
    var handlebarsObj = {
      headline: data
    };
    res.render("index", handlebarsObj);
   
  })
  .catch(function(err) {
    res.json(err);
  });

}

module.exports = {
  fetch: scrape,
  load: handlebars
};