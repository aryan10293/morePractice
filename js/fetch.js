export default function getFetch(code){
    const input = document.getElementById('selectCity')
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value},${code}&limit=1&appid=663d3a08f32e9604f02ce96ea9ea1bd0`
    let cool = 0
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
             cool = `https://api.openweathermap.org/data/2.5/weather?lat=${data[0]['lat']}&lon=${data[0]['lon']}&appid=663d3a08f32e9604f02ce96ea9ea1bd0`
             fetch(cool)
             .then(res => res.json()) // parse response as JSON
             .then(info => {
                let temp = parseInt((info['main']['temp'] - 273.15) * 9/5 + 32)
                let high = parseInt((info['main']['temp_max'] - 273.15) * 9/5 + 32)
                let low = parseInt((info['main']['temp_min'] - 273.15) * 9/5 + 32)
                 console.log(temp)
             })
             .catch(err => {
                 console.log(`error ${err}`)
             });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

