export default function getForecast(code){
    const input = document.getElementById('selectCity')
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${input.value},${code}&limit=1&appid=663d3a08f32e9604f02ce96ea9ea1bd0`
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
         let url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0]['lat']}&lon=${data[0]['lon']}&appid=663d3a08f32e9604f02ce96ea9ea1bd0`
         fetch(url2)
         .then(res => res.json()) // parse response as JSON
         .then(info => {
             let date = new Date (info['list'][5]['dt_txt'])
             let temp = parseInt((info['list'][5]['main']['temp'] - 273.15) * 9/5 + 32)
             date = new String(date)
             let day = date.slice(0,3)
            document.getElementById('dayOne').innerText = day
            document.getElementById('cloudyOne').innerText = info['list'][5]['weather'][0]['description']
            document.getElementById('tempOne').innerText = temp
         })
         .catch(err => {
             console.log(`error ${err}`)
         });
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}