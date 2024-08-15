import globalSettings from "./objects/globalSettings.js";
import doc from "./objects/doc.js";

// data = fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bethesda/next7days?key=34A76APDQMZHC36HZLFSTPTZ7&include=days,hours', {mode:'cors'})
//         .then((response) => {
//             return response.json();
//         })


// console.log(data);



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







