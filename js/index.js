$(document).ready(function() {
  $(".btn").click(function() {
    $.ajax({method : 'GET' ,
            crossDomain : true,
            url: "http://api.forismatic.com/api/1.0/",
            data: {method: "getQuote",format: "jsonp",lang: "en"},
            dataType: "jsonp",
            jsonp: "jsonp",
            jsonpCallback: "myJsonMethod"
    }); 
  });
});
function myJsonMethod(response){
  var message = response;
  var quoteText = message.quoteText;
  $('.quoteText').html( quoteText );
}