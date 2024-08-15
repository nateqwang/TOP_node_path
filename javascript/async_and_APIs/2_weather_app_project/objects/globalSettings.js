const globalSettings = {

    cf: 'f',
    processTemp: function (temp) {

        if (globalSettings.cf == 'f') {
            return temp;
        } else if (globalSettings.cf == 'c') {
            return (temp - 32) * 5 / 9;
        }

    }

}

export default globalSettings