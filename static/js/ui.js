class UI{
    insertDataToCards(parentID,dataJSON,deaths=true){
        // Data elements
        let areaName = dataJSON[0].areaName;
        let areaNameDisplay = areaName;
        if (areaNameDisplay === 'Northern Ireland'){
            areaNameDisplay = 'N Ireland';
        }
        let date = dataJSON[0].date;
        let cumData = 0;
        if (deaths){
            cumData = dataJSON[0].cumDeaths;
        } else {
            cumData = dataJSON[0].cumCases;
        }
        let innerData = `<h6 class="center-align">${areaNameDisplay}</h6><p class="center-align">${cumData}</p>`
        document.getElementById(parentID+areaName).innerHTML = innerData;
    }
}
