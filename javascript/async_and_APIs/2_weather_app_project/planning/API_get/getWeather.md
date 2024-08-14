getWeather ( location ) 

fetch ( 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?key=34A76APDQMZHC36HZLFSTPTZ7&include=days,hours', {mode: 'cors'})

.then (function (data) {

    return data.json()

})

