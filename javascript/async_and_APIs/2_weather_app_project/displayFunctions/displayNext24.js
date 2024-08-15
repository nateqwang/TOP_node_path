import doc from "../objects/doc.js";
import globalSettings from "../objects/globalSettings.js";
import processCondition from "../objects/processCondition.js";

const displayNext24 = function (data) {

    while (doc.next24.hasChildNodes()) {
        doc.next24.firstChild.remove();
    }

    for (let i = 0; i < 24; i++) {
        const hourContainer = document.createElement('div');
        hourContainer.setAttribute('class','hour');

        const condImg = document.createElement('img');
        condImg.setAttribute('class','hour_icon');
        condImg.setAttribute('src',processCondition(data.daysInfo[0].hours[i])[0]);

        const time = document.createElement('p');
        time.textContent = `${data.daysInfo[0].hours[i].hour.substr(0,2)}`;

        const temp = document.createElement('p');
        temp.textContent = `${globalSettings.processTemp(data.daysInfo[0].hours[i].temp)}`;

        hourContainer.appendChild(condImg);
        hourContainer.appendChild(time);
        hourContainer.appendChild(temp);

        doc.next24.appendChild(hourContainer);
    }

}

export default displayNext24