import globalSettings from "./objects/globalSettings.js";
import doc from "./objects/doc.js";
import displayHeader from "./displayFunctions/displayHeader.js";
import displayToday from "./displayFunctions/displayToday.js";
import displayNow from "./displayFunctions/displayNow.js";
import displayNext24 from "./displayFunctions/displayNext24.js";


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
            displayNow(response);
            displayNext24(response);
            doc.fcSelectionBtn.addEventListener('click', () => {
                if (globalSettings.cf == 'F') {
                    globalSettings.cf = 'C';
                    doc.fcSelectionBtn.textContent = 'C';
                } else if (globalSettings.cf == 'C') {
                    globalSettings.cf = 'F';
                    doc.fcSelectionBtn.textContent = 'F';
                }
                displayHeader(response);
                displayToday(response);
                displayNow(response);
                displayNext24(response);
            })
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
                feelslike: globalSettings.processTemp(hour.feelslike),
                condition: hour.conditions
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
            humidity: day.humidity,
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

doc.search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let location = searchInput.value;
        getWeather(location);
    }
})

getWeather('bethesda');








