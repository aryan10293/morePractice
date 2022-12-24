import state from './states.json' assert{type: 'json'}
import getFetch from './fetch.js';
import getForecast from './forecast.js';
export  default function getCodeCountry(){
    function isStateCountry(){
        const idk = document.getElementById('selectState')
        let isCountry = 0 
         let isState = state.filter(x => {
             if(x['name'] === idk.value){
                 return x
             }  
         })
         //console.log(isState)
         if(isState.length === 1){
            getFetch(parseInt(isState[0]['code']))
            getForecast(parseInt(isState[0]['code']))
         } else {
             isCountry = idk.value
             let url = `https://restcountries.com/v2/name/${idk.value}`
          return fetch(url)
             .then(res => res.json()) // parse response as JSON
             .then(info => {
                  getFetch(parseInt(info[0]['callingCodes'][0]))
                  getForecasth(parseInt(isState[0]['code']))
             })
             .catch(err => {
                 console.log(`error ${err}`)
             });
        
         }
    }
     return isStateCountry()
   }

   // loop tyhrough array 
   //check each object to see icv the value = the name
   // if it down