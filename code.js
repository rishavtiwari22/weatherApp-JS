// 'https://jsonplaceholder.typicode.com/todos/1'
// `https://api.openweathermap.org/data/2.5/weather?q=${newinput}&appid=cbea8be86625e4f90f67ab796d471f6f&units=metric`

let val = document.getElementsByTagName("button");

val[0].addEventListener("click", (e) => {
    let input = document.getElementsByTagName("input");
    let newinput = input[0].value || 'Delhi';


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newinput}&appid=cbea8be86625e4f90f67ab796d471f6f&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }else{
                return response.json();
            }
        })
        .then(data => {
            console.log('All weather data - ',data);
            console.log('Weather type - ' ,data.weather[0].main); 
            let m = document.getElementsByClassName('list');

            m[0].innerHTML = `<h1>${data.name}</h1>
            <li>Max temp - ${data.main.temp_max} C</li>
            <li>Min temp - ${data.main.temp_min} C</li>
            <li>Humidity - ${data.main.humidity} g/kg</li>
            <li>Wind - ${data.wind.speed} km/h </li>`

            let h2 = document.getElementsByTagName('h2');
            h2[0].innerText = data.weather[0].main;

            let img = document.getElementsByTagName('img');
            img[0].style.height = '180px';
            img[0].style.width = '180px';

            if (data.weather[0].main === 'Clear') {
                img[0].setAttribute('src', './images/clear.png');
            } else if (data.weather[0].main === 'Clouds' || data.weather[0].main === 'Haze') {
                img[0].setAttribute('src', './images/cloud&winds.png');
            } else if (data.weather[0].main === 'Rain') {
                img[0].setAttribute('src', './images/rain.png');
            } else if (data.weather[0].main === 'Mist') {
                img[0].setAttribute('src', './images/mist2.png');
            } else if (data.weather[0].main === 'Tornado') {
                img[0].setAttribute('src', './images/tornado.png');
            } else if (data.weather[0].main === 'Thunderstorm') {
                img[0].setAttribute('src', './images/thunder.png');
            } 
        })
        .catch((e) => console.log('Error... ',e.message))
});
