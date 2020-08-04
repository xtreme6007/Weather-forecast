// global variables
var cityNameEl = $("#cityName");
var searchButton = $("#citySearch");
var todayForecast = $("currentDayForecast")
var clearSkyImg = "https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-13.jpg"
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
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=f6c77a9f94d27e264229784c1325f0c5&units=imperial";
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
        var dataTime = response.dt;
        var sunrise = response.sys.sunrise;
        var sunset = response.sys.sunrise;
        // create element for temp



        // give text to element
        tempEl.text("Temp: " + temp + "F");
        feelEl.text("Feels Like: " + feelsLike + "F");
        nameEl.text(name);
        windEl.text("Wind Speed: " + windSpeed + "mph");
        humidEl.text("Humidity:" + humidity);
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

        // icon for clear weather
        if (weather === "Clear") {
            imgEl.attr("src", "https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-13.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
            // icon for Thunderstorm
        } else if (weather === "Thunderstorm") {
            imgEl.attr("src", "https://listimg.pinclipart.com/picdir/s/13-132540_hail-storm-cliparts-storm-weather-icon-png-download.png");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
            // icon for Drizzle
        } else if (weather === "Drizzle") {
            imgEl.attr("src", "https://www.clipartmax.com/png/middle/183-1837549_cloud-drizzle-rain-shower-storm-sun-weather-icon-sun-cloud-and-rain.png");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
            // icon for rainy weather
        } else if (weather === "Rain") {
            imgEl.attr("src", "https://previews.123rf.com/images/maheyfoto/maheyfoto1705/maheyfoto170500076/78966726-illustration-of-clouds-with-rainfall-weather-icon-of-heavy-rainfall-dark-gray-clouds-with-rain-weath.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
            // icon for snow 
        } else if (weather === "Snow") {
            imgEl.attr("src", "https://i.pinimg.com/originals/00/66/43/006643ac68fe18b0df88e9ff21a4b153.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
            // icon for cloudy weather
        } else if (weather === "Clouds") {
            imgEl.attr("src", "https://cdn1.iconfinder.com/data/icons/weather-forecast-meteorology-color-1/128/weather-partly-sunny-512.png");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")

        }




        console.log(response);
        console.log(cityName);
        // for uv index
        var indexURL = "https://api.openweathermap.org/data/2.5/uvi?appid=f6c77a9f94d27e264229784c1325f0c5&lat=" + lat + "&lon=" + lon;
        $.ajax({
            url: indexURL,
            method: "GET"
        }).then(function (response) {
            console.log(response)
            var uvIndex = response.value;
            // uv index tag
            var uvEl = $("<p>");
            // span tag for Uv index value
            var span = $("<span>");

            console.log(uvIndex);
            // set UV index for span text
            span.text(uvIndex)

            // background color for Extrem UV index
            if (uvIndex > 11) {
                span.attr("style", "background-color: purple;")
                // background color for Very High UV index
            } else if (uvIndex > 8) {
                span.attr("style", "background-color: red;")
                // background color for High UV index
            } else if (uvIndex > 6) {
                span.attr("style", "background-color: orange;")
                // background color for moderate UV index
            } else if (uvIndex > 3) {
                span.attr("style", "background-color: yellow;")
                // background color for low UV index
            } else if (uvIndex < 3) {
                span.attr("style", "background-color: green;")
            }
            // set text for UV el p tag
            uvEl.text("UV Index: ")
            // attach span tag to p tag for UV index
            var uvElStyle = uvEl.append(span);
            // append all  Styled UV index text
            $("#currentDayForecast").append(uvElStyle);
        });
    });

});
