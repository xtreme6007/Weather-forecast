// global variables
var cityNameEl = $("#cityName");
var searchButton = $("#citySearch");
var todayForecast = $("currentDayForecast")
// when search button is clicked
searchButton.on("click", function() {
    // get name of city
    var cityName = cityNameEl.val();
    // add name of city to url 
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=f6c77a9f94d27e264229784c1325f0c5&units=imperial";
    // request information from open weather map
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          // get tempature
          var temp = response.main.temp ;
          // create element for temp
          var tempEl = $("<p>");
          // give text to element
          tempEl.text(temp);
          console.log(temp);
          // append to html
          $("#currentDayForecast").append(tempEl);

   console.log(response);
   console.log(cityName);
      });


});
