// global variables
var cityNameEl = $("#cityName");
var searchButton = $("#citySearch");
var fiveDay = $("#fiveDayForecast");
var nameEl = $("<h2>");
var tempEl = $("<p>");
var windEl = $("<p>");
var humidEl = $("<p>");
var feelEl = $("<p>");
var weatherEl = $("<p>")
var currentHead = $("<h1>")
var imgEl = $("<img>");
var bttnsContainer = $("#previousButtons")
var bttn = $("<button>");

    
    // renderData Function
    function renderData () {
    $("#currentDayForecast").empty();
    bttnsContainer.append(bttn)
    // get name of city
    var cityName = cityNameEl.val();
    // add name of city to url 
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=f6c77a9f94d27e264229784c1325f0c5&units=imperial";
    // request information from open weather map
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
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
            imgEl.attr("src", "assets/Imgs/sunicon.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
            // icon for Thunderstorm
        } else if (weather === "Thunderstorm") {
            imgEl.attr("src", "assets/Imgs/thunderstorm.png");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
            // icon for Drizzle
        } else if (weather === "Drizzle") {
            imgEl.attr("src", "assets/Imgs/drizzle.png");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
            // icon for rainy weather
        } else if (weather === "Rain") {
            imgEl.attr("src", "assets/Imgs/rain.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
            // icon for snow 
        } else if (weather === "Snow") {
            imgEl.attr("src", "assets/Imgs/snow.jpg");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")
            // icon for cloudy weather
        } else if (weather === "Clouds") {
            imgEl.attr("src", "assets/Imgs/cloudy1.png");
            imgEl.attr("height", "100px");
            imgEl.attr("width", "100px");
            imgEl.attr("class", "float-right")

        }
    


        
        console.log(cityName);
        // for uv index
        var indexURL = "https://api.openweathermap.org/data/2.5/uvi?appid=f6c77a9f94d27e264229784c1325f0c5&lat=" + lat + "&lon=" + lon;
        $.ajax({
            url: indexURL,
            method: "GET"
        }).then(function (response) {
            
            var uvIndex = response.value;
            // uv index tag
            var uvEl = $("<p>");
            // span tag for Uv index value
            var span = $("<span>");

            
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
        // start working on five day forecast
        var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=f6c77a9f94d27e264229784c1325f0c5&units=imperial";

        $.ajax({
            url: fiveDayUrl,
            method: "GET"
        }).then(function (response) {
           console.log(response);
           // set day variables
           var tomorow = response.list[4];
           var secondDay = response.list[12];
           var thirdDay = response.list[22];
           var fourthDay = response.list[29];
           var fifthDay = response.list[37];
           
           // get data for each day
                // tomorow data
                var tomorowDate = tomorow.dt_txt.split(" ");
                var tomorowCondition = tomorow.weather[0].main;
                var tomorowTemp = tomorow.main.temp;
                var tomorowHumid = tomorow.main.humidity;
                // second day data
                var secondDate = secondDay.dt_txt.split(" ");
                var secondCondition = secondDay.weather[0].main;
                var secondTemp = secondDay.main.temp;
                var secondHumid = secondDay.main.humidity;
                // third day data
                var thirdDate = thirdDay.dt_txt.split(" ");
                var thirdCondition = thirdDay.weather[0].main;
                var thirdTemp = thirdDay.main.temp;
                var thirdHumid = thirdDay.main.humidity;
                // fourth day data
                var fourthDate = fourthDay.dt_txt.split(" ");
                var fourthCondition = fourthDay.weather[0].main;
                var fourthTemp = fourthDay.main.temp;
                var fourthHumid = fourthDay.main.humidity;
                //fifth day data
                var fifthDate = fifthDay.dt_txt.split(" ");
                var fifthCondition = fifthDay.weather[0].main;
                var fifthTemp = fifthDay.main.temp;
                var fifthHumid = fifthDay.main.humidity;
        // create elements to display data
            // first day elements
            var tomorowCondidtionImg = $("<img>");
            var tomorowTempEl = $("<p>");
            var tomorowHumidEl = $("<p>");
            var tomorowDateEl = $("<p>");
            
            // second day elements
            var secondConditionImg = $("<img>");
            var secondTempEl = $("<p>");
            var secondHumidEl = $("<p>");
            var secondDateEl = $("<p>");
            
            // third day elements
            var thirdConditionImg = $("<img>");
            var thirdDateEl = $("<p>");
            var thirdTempEl = $("<p>");
            var thirdHumidEl = $("<p>");

            //fourth day Elements
            var fourthConditionImg = $("<img>");
            var fourthDateEl = $("<p>");
            var fourthTempEl = $("<p>");
            var fourthHumidEl = $("<p>");

            // fifth day elements
            var fifthConditionImg = $("<img>");
            var fifthDateEl = $("<p>");
            var fifthTempEl = $("<p>");
            var fifthHumidEl = $("<p>");

            // set text
                // tommorow text 
                tomorowTempEl.text("Temperature: " + tomorowTemp);
                tomorowHumidEl.text("Humidity: " + tomorowHumid);
                tomorowDateEl.text("Date: " + tomorowDate[0]);

                // img criteria for tommorow   
                    // icon for clear 
                    if (tomorowCondition === "Clear") {
                        tomorowCondidtionImg.attr("src", "assets/Imgs/sunicon.jpg");
                        tomorowCondidtionImg.attr("height", "80px");
                        tomorowCondidtionImg.attr("width", "100px");

                        // icon for Thunderstorm
                    } else if (tomorowCondition === "Thunderstorm") {
                        tomorowCondidtionImg.attr("src", "assets/Imgs/thunderstorm.png");
                        tomorowCondidtionImg.attr("height", "80px");
                        tomorowCondidtionImg.attr("width", "100px");

                        // icon for Drizzle
                    } else if (tomorowCondition === "Drizzle") {
                        tomorowCondidtionImg.attr("src", "assets/Imgs/drizzle.png");
                        tomorowCondidtionImg.attr("height", "80px");
                        tomorowCondidtionImg.attr("width", "100px");

                        // icon for rainy weather
                    } else if (tomorowCondition === "Rain") {
                        tomorowCondidtionImg.attr("src", "assets/Imgs/rain.jpg");
                        tomorowCondidtionImg.attr("height", "80px");
                        tomorowCondidtionImg.attr("width", "100px");

                        // icon for snow 
                    } else if (tomorowCondition === "Snow") {
                        tomorowCondidtionImg.attr("src", "assets/Imgs/snow.jpg");
                        tomorowCondidtionImg.attr("height", "80px");
                        tomorowCondidtionImg.attr("width", "1000px");

                        // icon for cloudy Condition
                    } else if (tomorowCondition === "Clouds") {
                        tomorowCondidtionImg.attr("src", "assets/Imgs/cloudy1.png");
                        tomorowCondidtionImg.attr("height", "80px");
                        tomorowCondidtionImg.attr("width", "100px");

            
                    }
                
                // second day text
                secondTempEl.text("Temperature:" + secondTemp);
                secondHumidEl.text("Humidity:" + secondHumid);
                secondDateEl.text("Date: " +secondDate[0]);

                // img criteria for second day
                if (secondCondition === "Clear") {
                    secondConditionImg.attr("src", "assets/Imgs/sunicon.jpg");
                    secondConditionImg.attr("height", "80px");
                    secondConditionImg.attr("width", "100px");

                    // icon for Thunderstorm
                } else if (secondCondition === "Thunderstorm") {
                    secondConditionImg.attr("src", "assets/Imgs/thunderstorm.png");
                    secondConditionImg.attr("height", "80px");
                    secondConditionImg.attr("width", "100px");

                    // icon for Drizzle
                } else if (secondCondition === "Drizzle") {
                    secondConditionImg.attr("src", "assets/Imgs/drizzle.png");
                    secondConditionImg.attr("height", "80px");
                    secondConditionImg.attr("width", "100px");

                    // icon for rainy weather
                } else if (secondCondition === "Rain") {
                    secondConditionImg.attr("src", "assets/Imgs/rain.jpg");
                    secondConditionImg.attr("height", "80px");
                    secondConditionImg.attr("width", "100px");

                    // icon for snow 
                } else if (secondCondition === "Snow") {
                    secondConditionImg.attr("src", "assets/Imgs/snow.jpg");
                    secondConditionImg.attr("height", "80px");
                    secondConditionImg.attr("width", "1000px");

                    // icon for cloudy Condition
                } else if (secondCondition === "Clouds") {
                    secondConditionImg.attr("src", "assets/Imgs/cloudy1.png");
                    secondConditionImg.attr("height", "80px");
                    secondConditionImg.attr("width", "100px");

        
                }


                // set text for third day
                thirdTempEl.text("Temperature:" + thirdTemp);
                thirdHumidEl.text("Humidity:" + thirdHumid);
                thirdDateEl.text("Date: " + thirdDate[0]);

            // set icon img
                // icon for clear 
                if (thirdCondition === "Clear") {
                thirdConditionImg.attr("src", "assets/Imgs/sunicon.jpg");
                thirdConditionImg.attr("height", "80px");
                thirdConditionImg.attr("width", "100px");

                // icon for Thunderstorm
                } else if (thirdCondition === "Thunderstorm") {
                thirdConditionImg.attr("src", "assets/Imgs/thunderstorm.png");
                thirdConditionImg.attr("height", "80px");
                thirdConditionImg.attr("width", "100px");

                // icon for Drizzle
                } else if (thirdCondition === "Drizzle") {
                thirdConditionImg.attr("src", "assets/Imgs/drizzle.png");
                thirdConditionImg.attr("height", "80px");
                thirdConditionImg.attr("width", "100px");

                // icon for rainy weather
                } else if (thirdCondition === "Rain") {
                thirdConditionImg.attr("src", "assets/Imgs/rain.jpg");
                thirdConditionImg.attr("height", "80px");
                thirdConditionImg.attr("width", "100px");

                // icon for snow 
                } else if (thirdCondition === "Snow") {
                thirdConditionImg.attr("src", "assets/Imgs/snow.jpg");
                thirdConditionImg.attr("height", "80px");
                thirdConditionImg.attr("width", "1000px");

                // icon for cloudy Condition
                } else if (thirdCondition === "Clouds") {
                thirdConditionImg.attr("src", "assets/Imgs/cloudy1.png");
                thirdConditionImg.attr("height", "80px");
                thirdConditionImg.attr("width", "100px");

    
                }
            // set txt for fourth day block
            fourthTempEl.text("Temperature:" + fourthTemp);
            fourthHumidEl.text("Humidity:" + fourthHumid);
            fourthDateEl.text("Date: " + fourthDate[0]);

            // set weather icon for fourth day
            // icon for clear 
            if (fourthCondition === "Clear") {
                fourthConditionImg.attr("src", "assets/Imgs/sunicon.jpg");
                fourthConditionImg.attr("height", "80px");
                fourthConditionImg.attr("width", "100px");

                // icon for Thunderstorm
                } else if (fourthCondition === "Thunderstorm") {
                fourthConditionImg.attr("src", "assets/Imgs/thunderstorm.png");
                fourthConditionImg.attr("height", "80px");
                fourthConditionImg.attr("width", "100px");

                // icon for Drizzle
                } else if (fourthCondition === "Drizzle") {
                fourthConditionImg.attr("src", "assets/Imgs/drizzle.png");
                fourthConditionImg.attr("height", "80px");
                fourthConditionImg.attr("width", "100px");

                // icon for rainy weather
                } else if (fourthCondition === "Rain") {
                fourthConditionImg.attr("src", "assets/Imgs/rain.jpg");
                fourthConditionImg.attr("height", "80px");
                fourthConditionImg.attr("width", "100px");

                // icon for snow 
                } else if (fourthCondition === "Snow") {
                fourthConditionImg.attr("src", "assets/Imgs/snow.jpg");
                fourthConditionImg.attr("height", "80px");
                fourthConditionImg.attr("width", "1000px");

                // icon for cloudy Condition
                } else if (fourthCondition === "Clouds") {
                fourthConditionImg.attr("src", "assets/Imgs/cloudy1.png");
                fourthConditionImg.attr("height", "80px");
                fourthConditionImg.attr("width", "100px");


                }
               // set txt for fifthday block
                fifthTempEl.text("Temperature:" + fifthTemp);
                fifthHumidEl.text("Humidity:" + fifthHumid);
                fifthDateEl.text("Date: " + fifthDate[0]);

                // set weather icon
                if (fifthCondition === "Clear") {
                    fifthConditionImg.attr("src", "assets/Imgs/sunicon.jpg");
                    fifthConditionImg.attr("height", "80px");
                    fifthConditionImg.attr("width", "100px");

                    // icon for Thunderstorm
                } else if (fifthCondition === "Thunderstorm") {
                    fifthConditionImg.attr("src", "assets/Imgs/thunderstorm.png");
                    fifthConditionImg.attr("height", "80px");
                    fifthConditionImg.attr("width", "100px");

                    // icon for Drizzle
                } else if (fifthCondition === "Drizzle") {
                    fifthConditionImg.attr("src", "assets/Imgs/drizzle.png");
                    fifthConditionImg.attr("height", "80px");
                    fifthConditionImg.attr("width", "100px");

                    // icon for rainy weather
                } else if (fifthCondition === "Rain") {
                    fifthConditionImg.attr("src", "assets/Imgs/rain.jpg");
                    fifthConditionImg.attr("height", "80px");
                    fifthConditionImg.attr("width", "100px");

                    // icon for snow 
                } else if (fifthCondition === "Snow") {
                    fifthConditionImg.attr("src", "assets/Imgs/snow.jpg");
                    fifthConditionImg.attr("height", "80px");
                    fifthConditionImg.attr("width", "1000px");

                    // icon for cloudy Condition
                } else if (fifthCondition === "Clouds") {
                    fifthConditionImg.attr("src", "assets/Imgs/cloudy1.png");
                    fifthConditionImg.attr("height", "80px");
                    fifthConditionImg.attr("width", "100px");

        
                }

                
            
            // append to html
                    // tommorow forecast
                    $("#tomorowBlock").append(tomorowCondidtionImg);
                    $("#tomorowBlock").append(tomorowTempEl);
                    $("#tomorowBlock").append(tomorowHumidEl);
                    $("#tomorowBlock").append(tomorowDateEl);
                    // second day forecast
                    $("#secondDayBlock").append(secondConditionImg);
                    $("#secondDayBlock").append(secondTempEl);
                    $("#secondDayBlock").append(secondHumidEl);
                    $("#secondDayBlock").append(secondDateEl);
                    // third day forecast
                    $("#thirdDayBlock").append(thirdConditionImg);
                    $("#thirdDayBlock").append(thirdTempEl);
                    $("#thirdDayBlock").append(thirdHumidEl);
                    $("#thirdDayBlock").append(thirdDateEl);
                    // fourthday forecast
                    $("#fourthDayBlock").append(fourthConditionImg);
                    $("#fourthDayBlock").append(fourthTempEl);
                    $("#fourthDayBlock").append(fourthHumidEl);
                    $("#fourthDayBlock").append(fourthDateEl);
                    //fifthday forecast
                    $("#fifthDayBlock").append(fifthConditionImg);
                    $("#fifthDayBlock").append(fifthTempEl);
                    $("#fifthDayBlock").append(fifthHumidEl);
                    $("#fifthDayBlock").append(fifthDateEl);

                

                
        });
        bttn.text(cityName);
        bttnsContainer.append(bttn);
        
        
};
searchButton.on("click", renderData) 
bttn.on("click", renderData);       
