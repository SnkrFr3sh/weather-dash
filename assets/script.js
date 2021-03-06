// var requestUrl = "https://community-open-weather-map.p.rapidapi.com/forecast?q=seattle%2Cus";
var currentCityUrl = "https://weatherapi-com.p.rapidapi.com/forecast.json?q="
var requestUrl = "https://community-open-weather-map.p.rapidapi.com/forecast?q=";
var searchHistory = []
cityResult = $('.cityResult');
currentHi = $('.currentHi');
currentLo = $('.currentLo');
currentHumidity = $('.currentHumidity');
currentUV = $('.currentUV');
currentHi = $('.currentWindSpeed');
currentTemp = $('.currentTemp');
currentWindSpeed = $('.currentWindSpeed');
resultsContainer = $('.resultsContainer');
searchCityResult = $('.searchCityResult');
fiveDayCards = $('.fiveDayCards');
recentSearchList = $('.recentSearchList');
recentSearchListItem = $('.recentSearchListItem');
listItem1 = $('.listItem1');
listItem2 = $('.listItem2');
listItem3 = $('.listItem3');
listItem4 = $('.listItem4');
listItem5 = $('.listItem5');
currentWeatherIcon = $('#currentWeatherIcon')



var today = moment();

var day1 = today.format("MMM Do");
var day2 = today.add(1, 'days').format("MMM Do");
var day3 = today.add(1, 'days').format("MMM Do");
var day4 = today.add(1, 'days').format("MMM Do");
var day5 = today.add(1, 'days').format("MMM Do");
var day6 = today.add(1, 'days').format("MMM Do");

day2Date = $('.day2Card');
day3Date = $('.day3Card');
day4Date = $('.day4Card');
day5Date = $('.day5Card');
day6Date = $('.day6Card');


userCity = $('.userCity')
searchBtn = $('.searchBtn')
var recentSearches = []





searchBtn.on('click', function () {

    recentSearches.push(userCity.val());

    localStorage.setItem('recentSearches', recentSearches)
    console.log('search list', recentSearches)
    searchList()
    currentCityResult();
    fiveDayForecast();


})

function searchList() {
    for (let i = 0; i < recentSearches.length; i++) {
        var listItem = document.createElement('li');
        listItem1.text(recentSearches[0]);
        listItem2.text(recentSearches[1]);
        listItem3.text(recentSearches[2]);
        listItem4.text(recentSearches[3]);
        listItem5.text(recentSearches[4]);
        recentSearchList.append(listItem1);
        recentSearchList.append(listItem2);
        recentSearchList.append(listItem3);
        recentSearchList.append(listItem4);
        recentSearchList.append(listItem5);
    }
}

function fiveDayForecast() {
    var searchResult = requestUrl + userCity.val() + '&2Cus&units=imperial';
    localStorage.setItem('searchResult', searchResult)
    console.log('searchResult', searchResult);
    fetch(searchResult, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
            "x-rapidapi-key": "bd9fd307c6mshd4925220356c88cp1bfc9cjsn1abcc7218d6d"
        }
    })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            console.log(data.list[3].main.temp);
            console.log(data.list[3].dt_txt)
            day2Date.text(day2);
            day3Date.text(day3);
            day4Date.text(day4);
            day5Date.text(day5);
            day6Date.text(day6);
            // day2
            day2Icon = $('<img> ')
            day2Temp = $('<p>')
            day2wind = $('<p>')
            day2humidity = $('<p>')
            day2Icon.attr('src', 'http://openweathermap.org/img/w/' + data.list[1].weather[0].icon + '.png')
            day2Temp.text(data.list[1].main.temp + '???')
            day2wind.text(data.list[1].wind.speed + 'mph')
            day2humidity.text(data.list[1].main.humidity + '%')
            day2Date.append(day2Icon)
            day2Date.append(day2Temp)
            day2Date.append(day2wind)
            day2Date.append(day2humidity)
            // day3
            day3Icon = $('<img>')
            day3Temp = $('<p>')
            day3wind = $('<p>')
            day3humidity = $('<p>')
            day3Icon.attr('src', 'http://openweathermap.org/img/w/' + data.list[8].weather[0].icon + '.png')
            day3Temp.text(data.list[8].main.temp + '???')
            day3wind.text(data.list[8].wind.speed + 'mph')
            day3humidity.text(data.list[8].main.humidity + '%')
            day3Date.append(day3Icon)
            day3Date.append(day3Temp)
            day3Date.append(day3wind)
            day3Date.append(day3humidity)
            // day4
            day4Icon = $('<img>')
            day4Temp = $('<p>')
            day4wind = $('<p>')
            day4humidity = $('<p>')
            day4Icon.attr('src', 'http://openweathermap.org/img/w/' + data.list[16].weather[0].icon + '.png')
            day4Temp.text(data.list[16].main.temp + '???')
            day4wind.text(data.list[16].wind.speed + 'mph')
            day4humidity.text(data.list[16].main.humidity + '%')
            day4Date.append(day4Icon)
            day4Date.append(day4Temp)
            day4Date.append(day4wind)
            day4Date.append(day4humidity)
            // day5
            day5Icon = $('<img>')
            day5Temp = $('<p>')
            day5wind = $('<p>')
            day5humidity = $('<p>')
            day5Icon.attr('src', 'http://openweathermap.org/img/w/' + data.list[24].weather[0].icon + '.png')
            day5Temp.text(data.list[24].main.temp + '???')
            day5wind.text(data.list[24].wind.speed + 'mph')
            day5humidity.text(data.list[24].main.humidity + '%')
            day5Date.append(day5Icon)
            day5Date.append(day5Temp)
            day5Date.append(day5wind)
            day5Date.append(day5humidity)
            // day6
            day6Icon = $('<img>')
            day6Temp = $('<p>')
            day6wind = $('<p>')
            day6humidity = $('<p>')
            day6Icon.attr('src', 'http://openweathermap.org/img/w/' + data.list[32].weather[0].icon + '.png')
            day6Temp.text(data.list[32].main.temp + '???')
            day6wind.text(data.list[32].wind.speed + 'mph')
            day6humidity.text(data.list[32].main.humidity + '%')
            day6Date.append(day6Icon)
            day6Date.append(day6Temp)
            day6Date.append(day6wind)
            day6Date.append(day6humidity)
            // console.log('icon test', list[0].weather[0].icon);

        })

}

// currentCity = 'currentCity'
// console.log('current City', currentCity)
// currentCity = localStorage.getItem('currentCity');
// cityResult = $('#citySearched');

function currentCityResult() {
    var currentCity = currentCityUrl + userCity.val() + '&days=5';
    console.log('currentCity', currentCity)
    localStorage.setItem('currentCity', currentCity)
    fetch(currentCity, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": "bd9fd307c6mshd4925220356c88cp1bfc9cjsn1abcc7218d6d"
        }
    })
        .then(response => {
            console.log(response);
            return response.json();

        })
        .then(function (data) {
            console.log(data);
            console.log('city name', data.location.name)

            cityResult.text('City: ' + data.location.name);

            currentWeatherIcon.attr("src", 'http:' + data.current.condition.icon);
            currentTemp.text('Current Temp: ' + data.current.temp_f + ' ???');
            currentHumidity.text('Humidity: ' + data.current.humidity);
            currentUV.text('UV index: ' + data.current.uv);
            currentWindSpeed.text('Wind Speed: ' + data.current.gust_mph);
            searchCityResult.append(cityResult);
            searchCityResult.append(currentWeatherIcon);
            searchCityResult.append(currentTemp);
            searchCityResult.append(currentHumidity);
            searchCityResult.append(currentUV);
            searchCityResult.append(currentWindSpeed);

        })
}

searchList()
