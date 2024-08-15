import processCondition from "../objects/processCondition.js";
import doc from "../objects/doc.js";

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

export default displayToday