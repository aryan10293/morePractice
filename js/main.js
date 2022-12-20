import user from './states.json' assert{type: 'json'}

function getFetch(){
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${'castro valley'}&limit=1&appid=663d3a08f32e9604f02ce96ea9ea1bd0`
    let cool = 0
    let temp = 0
    let high = 0
    let low = 0
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
             cool = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0]['lat']}&lon=${data[0]['lon']}&appid=663d3a08f32e9604f02ce96ea9ea1bd0`
             fetch(cool)
             .then(res => res.json()) // parse response as JSON
             .then(info => {
                 temp = parseInt((info['main']['temp'] - 273.15) * 9/5 + 32)
                 high = parseInt((info['main']['temp_max'] - 273.15) * 9/5 + 32)
                 low = parseInt((info['main']['temp_min'] - 273.15) * 9/5 + 32)
                 console.log(info)
                 //temp = 
             })
             .catch(err => {
                 console.log(`error ${err}`)
             });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }


 function getCodeCountry(){
  let url = `https://restcountries.com/v2/name/peru`
  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(info => {
      console.log(info) 
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
 }
function getCodeUs(){
console.log(user)
}

getCodeUs()
//  getFetch()
//  getCode()

// kelvin to fairinheight (temp - 273.15) * 9/5 + 32