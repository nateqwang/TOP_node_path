import findCurrentHour from "../objects/findCurrentHour.js";
import doc from "../objects/doc.js";
import globalSettings from "../objects/globalSettings.js";
import processCondition from "../objects/processCondition.js";

const displayNow = function (data) {
    const currentHour = findCurrentHour(data.daysInfo[0].hours);
    const nowDate = new Date();
    doc.nowDate.textContent = `${nowDate.getMonth()}/${nowDate.getDate()} ${nowDate.getHours()}:${nowDate.getMinutes()}`;
    doc.nowTemp.textContent = globalSettings.processTemp(currentHour.temp);
    doc.nowFeelsLike.textContent = `feels like: ${globalSettings.processTemp(currentHour.feelslike)}`;
    const processedCondition = processCondition(currentHour.condition);
    doc.nowConditionIcon.src = `${processedCondition[0]}`;
    doc.nowConditionDesc.textContent = `${processedCondition[1]}`;
}

export default displayNow