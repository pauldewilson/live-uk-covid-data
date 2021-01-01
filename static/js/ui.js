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
    refreshDataTiming(parentID,dataJSON){
        // data element
        let date = dataJSON[0].date;
        let dateDay = new Date(date).getDate();
        let dateMonth = new Date(date).getMonth()+1;
        let dateYear = new Date(date).getFullYear();
        document.getElementById(parentID).innerHTML = `
        The dataset was last updated on <b>${dateDay+'/'+dateMonth+'/'+dateYear}</b>
        `
    }
}
