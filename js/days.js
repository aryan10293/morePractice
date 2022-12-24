export default function dayOne(info){
    let date1 = new Date (info['list'][5]['dt_txt'])
    let temp1 = parseInt((info['list'][5]['main']['temp'] - 273.15) * 9/5 + 32)
    date1 = new String(date)
    let day1 = date1.slice(0,3)
   document.getElementById('dayOne').innerText = day1
   document.getElementById('cloudyOne').innerText = info['list'][5]['weather'][0]['description']
   document.getElementById('tempOne').innerHTML = `<p>${temp1}&#176;</p>`
}
 export function dayTwo(info){
    let date2 = new Date (info['list'][13]['dt_txt'])
    let temp2 = parseInt((info['list'][13]['main']['temp'] - 273.15) * 9/5 + 32)
    date2 = new String(date2)
    let day2 = date2.slice(0,3)
   document.getElementById('dayTwo').innerText = day2
   document.getElementById('cloudyTwo').innerText = info['list'][13]['weather'][0]['description']
   document.getElementById('tempTwo').innerHTML = `<p>${temp2}&#176;</p>`
}
export function dayThree(info){
    let date3 = new Date (info['list'][21]['dt_txt'])
    let temp3= parseInt((info['list'][21]['main']['temp'] - 273.15) * 9/5 + 32)
    date3 = new String(date3)
    let day3 = date3.slice(0,3)
   document.getElementById('dayThree').innerText = day3
   document.getElementById('cloudyThree').innerText = info['list'][21]['weather'][0]['description']
   document.getElementById('tempThree').innerHTML = `<p>${temp3}&#176;</p>`
}
export function dayFour(info){
    let date4 = new Date (info['list'][29]['dt_txt'])
    let temp4 = parseInt((info['list'][29]['main']['temp'] - 273.15) * 9/5 + 32)
    date4 = new String(date4)
    let day4 = date4.slice(0,3)
   document.getElementById('dayFour').innerText = day4
   document.getElementById('cloudyFour').innerText = info['list'][29]['weather'][0]['description']
   document.getElementById('tempFour').innerHTML = `<p>${temp4}&#176;</p>`
}
export function dayFive(info){
    let date5 = new Date (info['list'][37]['dt_txt'])
    let temp5 = parseInt((info['list'][37]['main']['temp'] - 273.15) * 9/5 + 32)
    date5 = new String(date5)
    let day5 = date5.slice(0,3)
   document.getElementById('dayFive').innerText = day5
   document.getElementById('cloudyFive').innerText = info['list'][37]['weather'][0]['description']
   document.getElementById('tempFive').innerHTML = `<p>${temp5}&#176;</p>`
}
