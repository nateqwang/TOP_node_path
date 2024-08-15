import doc from "../objects/doc.js";
import globalSettings from "../objects/globalSettings.js";

const displayHeader = function (data) {
    doc.fcSelectionBtn.textContent = `${globalSettings.cf}`;
    doc.address.textContent = `${data.address}`;
}

export default displayHeader