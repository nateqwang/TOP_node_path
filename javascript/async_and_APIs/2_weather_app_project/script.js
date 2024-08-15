import globalSettings from "./objects/globalSettings.js";
import doc from "./objects/doc.js";
import displayHeader from "./displayFunctions/displayHeader.js";


const getWeather = function (location) {

    const fetched = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?key=34A76APDQMZHC36HZLFSTPTZ7&include=days,hours`, {mode:'cors'})
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return processData(response);
        })
        .then(response => {
            displayHeader(response);
            displayToday(response);
        })
    
        return fetched;

}

const processData = function (data) {

    data.days.pop();

    const allDaysInfo = []

    
    for (let day of data.days) {
        const hoursInfo = []
        for (let hour of day.hours) {
            const hourInfo = {
                hour: hour.datetime.substr(0,5),
                temp: globalSettings.processTemp(hour.temp),
                feelslike: globalSettings.processTemp(hour.feelslike)
            }
            hoursInfo.push(hourInfo);
        }

        const dayInfo = {
            date: day.datetime.substr(5),
            tempmin: day.tempmin,
            temp: globalSettings.processTemp(day.temp),
            tempmax: globalSettings.processTemp(day.tempmax),
            condition: globalSettings.processTemp(day.conditions),
            feelslike: globalSettings.processTemp(day.feelslike),
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

const displayToday = function (data) {
    doc.todayTemp.textContent = `${data.daysInfo[0].temp}`;
    doc.todayHigh.textContent = `H:${data.daysInfo[0].tempmax}`;
    doc.todayLow.textContent = `L:${data.daysInfo[0].tempmin}`;
    let processedCondition = processCondition(data.daysInfo[0].condition);
    doc.todayConditionIcon.src = processedCondition[0];
    doc.todayConditionDesc.textContent = `${processedCondition[1]}`;
    doc.todaySunrise.textContent = `${data.daysInfo[0].sunrise.substr(0,5)}`;
    doc.todaySunset.textContent = `${data.daysInfo[0].sunset.substr(0,5)}`;
    doc.todayHumidity.textContent = `${data.daysInfo[0].humidity}`;
    doc.todayUV.textContent = `${data.daysInfo[0].uvindex}`;
    doc.todayVisibility.textContent = `${data.daysInfo[0].visibility}`;

}

const processCondition = function (condition) {
    return ['/icons/condition_icons/sun-svgrepo-com.svg','clear'];
}

const bet = getWeather('bethesda');

console.log(bet);







