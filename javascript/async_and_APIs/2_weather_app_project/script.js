// data = fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bethesda/next7days?key=34A76APDQMZHC36HZLFSTPTZ7&include=days,hours', {mode:'cors'})
//         .then((response) => {
//             return response.json();
//         })


// console.log(data);

const globalSetting = {

    cf: 'f',
    processTemp: function (temp) {

        if (globalSetting.cf == 'f') {
            return temp;
        } else if (globalSetting.cf == 'c') {
            return (temp - 32) * 5 / 9;
        }

    }

}

const doc = {

    search: document.querySelector('.text_input'),
    fcSelectionBtn: document.querySelector('.fc_selection'),
    address: document.querySelector('.address'),

    todayTemp: document.querySelector('.today_temp'),
    todayHigh: document.querySelector('.high'),
    todayLow: document.querySelector('.low'),
    todayConditionIcon: document.querySelector('.conditions img'),
    todayConditionDesc: document.querySelector('.today_condition'),

    todaySunrise: document.querySelector('.sunrise'),
    todaySunset: document.querySelector('.sunset'),
    todayHumidity: document.querySelector('.humidity'),
    todayUV: document.querySelector('.uv_index'),
    todayVisibility: document.querySelector('.visibility'),

    nowTemp: document.querySelector('.temp_now'),
    nowFeelsLike: document.querySelector('.feelslike_now'),
    nowConditionIcon: document.querySelector('.now_condition'),
    nowConditionDesc: document.querySelector('.condition_now_desc'),

    next24: document.querySelector('.next24')
}

const getWeather = function (location) {

    const fetched = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?key=34A76APDQMZHC36HZLFSTPTZ7&include=days,hours`, {mode:'cors'})
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return processData(response);
        })
    
        return fetched;

}

const processData = function (data) {

    data.days.pop();

    const allDaysInfo = []

    
    for (day of data.days) {
        const hoursInfo = []
        for (hour of day.hours) {
            const hourInfo = {
                hour: hour.datetime.substr(0,5),
                temp: globalSetting.processTemp(hour.temp),
                feelslike: globalSetting.processTemp(hour.feelslike)
            }
            hoursInfo.push(hourInfo);
        }

        const dayInfo = {
            date: day.datetime.substr(5),
            tempmin: day.tempmin,
            temp: globalSetting.processTemp(day.temp),
            tempmax: globalSetting.processTemp(day.tempmax),
            condition: globalSetting.processTemp(day.conditions),
            feelslike: globalSetting.processTemp(day.feelslike),
            humidity: day.humindity,
            sunrise: day.sunrise,
            sunset: day.sunset,
            uvindex: day.uvindex,
            visibility: day.visibility,
            hours: hoursInfo
        }
        allDaysInfo.push(dayInfo);
    }

    return {
        address: data.resolvedAddress,
        daysInfo: allDaysInfo
    }
}



// const bet = getWeather('bethesda');







