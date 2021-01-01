class UI{
    insertDataToCards(parentID,dataJSON,deaths=true){
        // Data elements
        let areaName = dataJSON[0].areaName;
        let date = dataJSON[0].date;
        let cumData = 0;
        if (deaths){
            cumData = dataJSON[0].cumDeaths;
        } else {
            cumData = dataJSON[0].cumCases;
        }
        let innerData = `<h6 class="center-align">${areaName}</h6><p class="center-align">${cumData}</p>`
        document.getElementById(parentID+areaName).innerHTML = innerData;
    }
}
