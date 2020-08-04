// global variables
var cityNameEl = $("#cityName");
var searchButton = $("#citySearch");
var todayForecast = $("currentDayForecast")
var clearSkyImg = "http://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-13.jpg"
var nameEl = $("<h2>");
var tempEl = $("<p>");
var windEl = $("<p>");
var humidEl = $("<p>");
var feelEl = $("<p>");
var weatherEl = $("<p>")
var currentHead = $("<h1>")
var imgEl = $("<img>");
// when search button is clicked
searchButton.on("click", function () {
    $("#currentDayForecast").empty();
    // get name of city
    var cityName = cityNameEl.val();
    // add name of city to url 
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=f6c77a9f94d27e264229784c1325f0c5&units=imperial";
    // request information from open weather map
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // store response data from open weather maps
        var temp = response.main.temp;
        var windSpeed = response.wind.speed;
        var lon = response.coord.lon;
        var lat = response.coord.lat;
        var humidity = response.main.humidity;
        var name = response.name;
        var feelsLike = response.main.feels_like;
        var weather = response.weather[0].main;
        // create element for temp



        // give text to element
        tempEl.text("Temp: " + temp + "F");
        feelEl.text("Feels Like: " + feelsLike + "F");
        nameEl.text(name);
        windEl.text("Wind Speed: " + windSpeed + "mph");
        humidEl.text("Humidity: " + humidity);
        weatherEl.text("Conditions: " + weather);
        currentHead.text("Current Forecast:")
        console.log(temp);
        // append to html
        $("#currentDayForecast").append(currentHead);
        $("#currentDayForecast").append(imgEl);
        $("#currentDayForecast").append(nameEl);
        $("#currentDayForecast").append(tempEl);
        $("#currentDayForecast").append(feelEl);
        $("#currentDayForecast").append(windEl);
        $("#currentDayForecast").append(humidEl);
        $("#currentDayForecast").append(weatherEl);


        if (weather === "Clear") {
            imgEl.attr("src", "https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-13.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
        } else if (weather === "Thunderstorm") {
            imgEl.attr("src", "https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-13.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")

        } else if (weather === "Drizzle") {
            imgEl.attr("src", "https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-13.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")

        } else if (weather === "Rain") {
            imgEl.attr("src", "https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-13.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")

        } else if (weather === "Snow") {
            imgEl.attr("src", "https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-13.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")

        } else if (weather === "Clouds") {
            imgEl.attr("src", "https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-13.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")

        }


        console.log(response);
        console.log(cityName);
        // for uv index
        var indexURL = "http://api.openweathermap.org/data/2.5/uvi?appid=f6c77a9f94d27e264229784c1325f0c5&lat=" + lat + "&lon=" + lon;
        $.ajax({
            url: indexURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            var uvIndex = response.value;
            console.log(uvIndex);
            var uvEl = $("<p>");
            uvEl.text("UV Index:" + uvIndex);
            $("#currentDayForecast").append(uvEl);
        });
    });

});
