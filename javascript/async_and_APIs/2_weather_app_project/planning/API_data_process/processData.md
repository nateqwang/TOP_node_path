processData (data) {

    data.days.pop

    let allDayInfo = []


    for day of data.days

        let hourInfo = []
        for hour of day.hours
            let inf = {
                hour: hour.datetime.substr(0,4)
                temp: processTemp(hour.temp)
                feelslike: processTemp(hour.feelslike)
            }
            hourInfo.push(inf)

        let dateObj =  {
            date: day.datetime.substr(5);
            tempmin: day.tempmin
            temp: processTemp(day.temp)
            tempmax: processTemp(day.tempmax)
            condition: processTemp(day.conditions)
            feelslike: processTemp(day.feelslike)
            humidity: day.humindity
            sunrise: day.sunrise
            sunset: day.sunset
            uvindex: day.uvindex
            visibility: day.visibility
            hours: hourInfo
        }

        allDayInfo.push(dateObj)


    return {

        address: data.resolvedAddress
        daysInfo: allDayInfo

    }

}