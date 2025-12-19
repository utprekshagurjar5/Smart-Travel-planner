const params = new URLSearchParams(window.location.search);

const city = params.get("city");
console.log(city);


const cityName = document.getElementById("cityName");

let GEODB_API_KEY = "4daedcb90dmsh1148a1f24c46415p13c210jsn8cc051567db4";
let GEODB_HOST = "wft-geo-db.p.rapidapi.com";

if(city){
    cityName.textContent = city;

    async function fetchCityDetails(cityName){
        try{
            let res = await fetch(
                `https:${GEODB_HOST}/v1/geo/cities?namePrefix=${city}&limit=1`,
                {
                    method : "GET",
                    headers : {
                        "X-RapidAPI-Key":GEODB_API_KEY,
                        "X-RapidAPI-HOST":GEODB_HOST,
                    },
                }
            );
            console.log(res);
            if(!res.ok){
                console.log("API Respnse not Fetched...");
                
            }
            let data = await res.json();
            console.log(data);

            if(!data.data || data.data.length === 0){
                console.log("City not found");
                
            }
            let cityData = data.data[0];

            
                //    display city info     
        } catch{
            console.log(error);
            
        }
    }


    fetchCityDetails(city)
}else{
    cityName.textContent ="Unknown City";
}