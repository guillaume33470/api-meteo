//appel de l'api meteo
const APIkey = "3c9784568a173ebaad34b8979b01033d";

/*******appel à l'API onpenweater(site internet)+ ville parametre*********/
let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric&lang=fr`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector("#temp").innerHTML =
          "<i class='fas fa-temperature-high'></i>" + data.main.temp + "°C";
        document.querySelector("#humidity").innerHTML =
          "<i class='fas fa-tint'></i>" + data.main.humidity + "%";
        document.querySelector("#wind").innerHTML =
          "<i class='fas fa-wind'></i>" + data.wind.speed + "m/s";
      })
    )
    .catch((err) => console.log("erreur : " + err));
};

/***********ecouter d'evennement sur la soumission formulaire********/
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let ville = document.querySelector("#inputville").value;

  apiCall(ville);
});

//appel par default au chargement de la page
apiCall("gujan-mestras");
