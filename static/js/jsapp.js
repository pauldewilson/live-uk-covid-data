const api = new API
const ui = new UI

api.validNations().forEach((country)=>{
    api.cumDataByCountry(country,deaths=true)
    .then((countryJSON)=>{
        ui.insertDataToCards('cumDeaths',countryJSON,deaths=true);
        ui.refreshDataTiming('refreshData',countryJSON);
    });
    api.cumDataByCountry(country,deaths=false)
    .then((countryJSON)=>{
        ui.insertDataToCards('cumCases',countryJSON,deaths=false);
    });
});
