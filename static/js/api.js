class API{
    constructor(){
        // api url endpoint is /data
        this.apiurl = appSettings.source_api
        }

    getHeader(){
        return {
            method:'GET',
            headers:{'content-type': 'application/json'}
        }
    }

    mandatoryFilters(){
        return ['areaType']
    }

    validFilters(){
        return ['areaType','areaName','areaCode','date']
    }

    validAreaTypes(){
        ['overview','nation','region','nhsRegion','utla','ltla']
    }

    validNations(){
        return ['england','scotland','wales','northern ireland'];
    }

    async cumDataByCountry(country, deaths=true){
        let url = '';
        if (deaths){
            url = this.apiurl+`?filters=areaType=nation;areaName=${country}&structure={"areaName":"areaName","date":"date","cumDeaths":"cumDeaths28DaysByPublishDate"}`;
        } else {
            url = this.apiurl+`?filters=areaType=nation;areaName=${country}&structure={"areaName":"areaName","date":"date","cumCases":"cumCasesByPublishDate"}`;
        }

        let request = await fetch(
            url,
            this.getHeader()
        );
        let data = await request.json();
        return data.data;
    }
}
