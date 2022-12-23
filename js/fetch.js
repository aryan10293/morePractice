export default function getFetch(code){
    const input = document.getElementById('selectCity')
    const cityName = document.getElementById('cityName')
    const weather = document.getElementById('weather')
    const clouds = document.getElementById('clouds')
    const state = document.getElementById('selectState')
    const highTemp = document.getElementById('high')
    const lowTemp = document.getElementById('low')
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value},${code}&limit=1&appid=663d3a08f32e9604f02ce96ea9ea1bd0`
    let url2 = 0
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
                cityName.innerText = `${input.value}, ${state.value}`
                weather.innerText = temp
                highTemp.innerText = high
                lowTemp.innerText = low
                 clouds.innerText = info['weather'][0]['description']
                state.value = ''
                input.value = ''
             })
             .catch(err => {
                 console.log(`error ${err}`)
             });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

        fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
             url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0]['lat']}&lon=${data[0]['lon']}&appid=663d3a08f32e9604f02ce96ea9ea1bd0`
             fetch(url2)
             .then(res => res.json()) // parse response as JSON
             .then(info => {
                 let date = new Date (info['list'][16]['dt_txt'])
                 date = new String(date)
                 let day = date.slice(0,3)
                console.log(day)
             })
             .catch(err => {
                 console.log(`error ${err}`)
             });
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }

