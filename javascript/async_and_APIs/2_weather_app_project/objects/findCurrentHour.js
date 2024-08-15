const findCurrentHour = function (arrayHours) {

    const now = new Date();
    let currentHour = String(now.getHours());
    if (currentHour.length == 1) {
        currentHour = `0${currentHour}`;
    };
    for (let i = 0; i < arrayHours.length; i++) {
        if (arrayHours[i].hour.substr(0,2) == currentHour) {
            return arrayHours[i];
        }
    }

}

export default findCurrentHour