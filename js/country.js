import getFetch from './fetch.js';
import getForecast from './forecast.js';
let state = [
    {
        "id": 0,
        "name" : "california",
        "code": "06"
    },
    {
        "id": 1,
        "name" : "rhode island",
        "code": "44"
    },
    {
        "id": 2,
        "name" : "georgia",
        "code": "13"
    },
    {
        "id": 3,
        "name" : "north dakota",
        "code": "38"
    },
    {
        "id": 4,
        "name" : "louisiana",
        "code": "22"
    },
    {
        "id": 5,
        "name" : "alaska",
        "code": "02"
    },
    {
        "id": 6,
        "name" : "washinton",
        "code": "53"
    },
    {
        "id": 7,
        "name" : "new mexico",
        "code": "35"
    },
    {
        "id": 8,
        "name" : "massachusettts",
        "code": "06"
    },
    {
        "id": 9,
        "name" : "utah",
        "code": "49"
    },
    {
        "id": 10,
        "name" : "mississippi",
        "code": "28"
    },
    {
        "id": 11,
        "name" : "united states virgin island",
        "code": "78"
    },
    {
        "id": 12,
        "name" : "texas",
        "code": "48"
    },
    {
        "id": 13,
        "name" : "west virginia",
        "code": "54"
    },
    {
        "id": 14,
        "name" : "puerto rico",
        "code": "72"
    },
    {
        "id": 15,
        "name" : "new jersey",
        "code": "34"
    },
    {
        "id": 16,
        "name" : "hawaii",
        "code": "15"
    },
    {
        "id": 17,
        "name" : "pennsylvania",
        "code": "42"
    },
    {
        "id": 18,
        "name" : "south dakota",
        "code": "46"
    },
    {
        "id": 19,
        "name" : "tennessee",
        "code": "47"
    },
    {
        "id": 20,
        "name" : "delaware",
        "code": "10"
    },
    {
        "id": 21,
        "name" : "district of columbia",
        "code": "11"
    },
    {
        "id": 22,
        "name" : "missouri",
        "code": "29"
    },
    {
        "id": 23,
        "name" : "florida",
        "code": "12"
    },
    {
        "id": 24,
        "name" : "Connecticut",
        "code": "09"
    },
    {
        "id": 25,
        "name" : "Maryland",
        "code": "24"
    },
    {
        "id": 26,
        "name" : "Wyoming",
        "code": "56"
    },
    {
        "id": 27,
        "name" : "Nebraska",
        "code": "31"
    },
    {
        "id": 28,
        "name" : "Oregon",
        "code": "41"
    },
    {
        "id": 29,
        "name" : "Idaho",
        "code": "16"
    },
    {
        "id": 30,
        "name" : "Kentucky",
        "code": "21"
    },
    {
        "id": 31,
        "name" : "Colorado",
        "code": "08"
    },
    {
        "id": 32,
        "name" : "Minnesota",
        "code": "27"
    },
    {
        "id": 33,
        "name" : "Iowa",
        "code": "19"
    },
    {
        "id": 34,
        "name" : "American Samoa",
        "code": "60"
    },
    {
        "id": 35,
        "name" : "Maine",
        "code": "23"
    },
    {
        "id": 36,
        "name" : "Michigan",
        "code": "26"
    },
    {
        "id": 37,
        "name" : "Kansas",
        "code": "20"
    },
    {
        "id": 38,
        "name" : "Guam",
        "code": "66"
    },
    {
        "id": 39,
        "name" : "Arizona",
        "code": "04"
    },
    {
        "id": 40,
        "name" : "South Carolina",
        "code": "45"
    },
    {
        "id": 41,
        "name" : "Nevada",
        "code": "32"
    },
    {
        "id": 42,
        "name" : "Ohio",
        "code": "39"
    },
    {
        "id": 43,
        "name" : "Virginia",
        "code": "51"
    },
    {
        "id": 44,
        "name" : "Indiana",
        "code": "18"
    },
    {
        "id": 45,
        "name" : "Commonwealth of the Northern Mariana Islands",
        "code": "69"
    },
    {
        "id": 46,
        "name" : "Oklahoma",
        "code": "40"
    },
    {
        "id": 47,
        "name" : "Illinois",
        "code": "17"
    },
    {
        "id": 48,
        "name" : "Montana",
        "code": "30"
    },
    {
        "id": 49,
        "name" : "New Hampshire",
        "code": "33"
    },
    {
        "id": 50,
        "name" : "Arkansas",
        "code": "05"
    },
    {
        "id": 51,
        "name" : "Wisconsin",
        "code": "55"
    },
    {
        "id": 52,
        "name" : "Alabama",
        "code": "01"
    },
    {
        "id": 53,
        "name" : "Vermont",
        "code": "50"
    },
    {
        "id": 54,
        "name" : "North Carolina",
        "code": "37"
    },
    {
        "id": 55,
        "name" : "New York",
        "code": "36"
    }
]
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
                  getForecast(parseInt(info[0]['callingCodes'][0]))
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