// ciclo for para cambio de color
const base = "https://ddools.imgix.net/cars/base.png?w=600&mark-align=center,middle&mark=https%3A%2F%2Fddools.imgix.net%2Fcars%2Fpaint.png%3Fw%3D600%26bri%3D-18%26con%3D26%26monochrome%3D"

let el = document.getElementsByClassName("color");
for (let i = 0; i < el.length; i++) {
  el[i].onclick = changeColor;
}

function changeColor(e) {
  let hex = e.target.getAttribute("data-hex");
  let updateColor = base + hex;
  document.getElementById("productImage").src = updateColor; 
}

// api

const url = "http://api.weatherapi.com/v1/forecast.json?key=23c45ef7bedb4ff489f203855211609&q=Argentina&days=1&aqi=no&alerts=no"
$.getJSON(url,(respuesta,estado) =>{
  if(estado === "success") {
    $(".apiWeather").prepend(`
    
    <p class="col align-self-start">Última actualización: ${respuesta.current.last_updated}</p>
    <p class="col align-self-center">Ubicación: ${respuesta.location.name},  ${respuesta.location.country}</p>
    <p class="col align-self-center">Temperatura Actual: ${respuesta.current.temp_c}° C - ST: ${respuesta.current.feelslike_c}° C</p>
    <p class="col align-self-end">Humedad: ${respuesta.current.humidity}%</p>
    
    `)
   
    console.log(respuesta)
  }
})

// efectos 

$("#weather").on("click", function() {
  $(".apiWeather").toggle(2000)
})