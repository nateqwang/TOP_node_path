const globalSettings = {

    cf: 'F',
    processTemp: function (temp) {

        if (globalSettings.cf == 'F') {
            return temp;
        } else if (globalSettings.cf == 'C') {
            return ((temp - 32) * 5 / 9).toFixed(1);
        }

    }

}

export default globalSettings