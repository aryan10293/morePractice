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
            let date1 = new Date (info['list'][5]['dt_txt'])
            let temp1 = parseInt((info['list'][5]['main']['temp'] - 273.15) * 9/5 + 32)
            date1 = new String(date1)
            let day1 = date1.slice(0,3)
           document.getElementById('dayOne').innerText = day1
           document.getElementById('cloudyOne').innerText = info['list'][5]['weather'][0]['description']
           document.getElementById('tempOne').innerHTML = `<p>${temp1}&#176;</p>`

           let date2 = new Date (info['list'][13]['dt_txt'])
           let temp2 = parseInt((info['list'][13]['main']['temp'] - 273.15) * 9/5 + 32)
           date2 = new String(date2)
           let day2 = date2.slice(0,3)
          document.getElementById('dayTwo').innerText = day2
          document.getElementById('cloudyTwo').innerText = info['list'][13]['weather'][0]['description']
          document.getElementById('tempTwo').innerHTML = `<p>${temp2}&#176;</p>`

          let date3 = new Date (info['list'][21]['dt_txt'])
          let temp3= parseInt((info['list'][21]['main']['temp'] - 273.15) * 9/5 + 32)
          date3 = new String(date3)
          let day3 = date3.slice(0,3)
         document.getElementById('dayThree').innerText = day3
         document.getElementById('cloudyThree').innerText = info['list'][21]['weather'][0]['description']
         document.getElementById('tempThree').innerHTML = `<p>${temp3}&#176;</p>`

         let date4 = new Date (info['list'][29]['dt_txt'])
         let temp4 = parseInt((info['list'][29]['main']['temp'] - 273.15) * 9/5 + 32)
         date4 = new String(date4)
         let day4 = date4.slice(0,3)
        document.getElementById('dayFour').innerText = day4
        document.getElementById('cloudyFour').innerText = info['list'][29]['weather'][0]['description']
        document.getElementById('tempFour').innerHTML = `<p>${temp4}&#176;</p>`

        let date5 = new Date (info['list'][37]['dt_txt'])
        let temp5 = parseInt((info['list'][37]['main']['temp'] - 273.15) * 9/5 + 32)
        date5 = new String(date5)
        let day5 = date5.slice(0,3)
       document.getElementById('dayFive').innerText = day5
       document.getElementById('cloudyFive').innerText = info['list'][37]['weather'][0]['description']
       document.getElementById('tempFive').innerHTML = `<p>${temp5}&#176;</p>`
         })
         .catch(err => {
             console.log(`error ${err}`)
         });
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}