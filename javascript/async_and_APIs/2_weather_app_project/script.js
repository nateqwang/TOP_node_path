import globalSettings from "./objects/globalSettings.js";
import doc from "./objects/doc.js";


const getWeather = function (location) {

    const fetched = fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/next7days?key=34A76APDQMZHC36HZLFSTPTZ7&include=days,hours`, {mode:'cors'})
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            return processData(response);
        })
        .then(response => {
            return displayHeader(response);
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

const displayHeader = function (data) {
    doc.fcSelectionBtn.textContent = `${globalSettings.cf}`;
    doc.address.textContent = `${data.address}`;
}



const bet = getWeather('bethesda');

console.log(bet);

displayHeader(bet);







