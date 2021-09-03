const apiKey = "c41b93925f19e000640b12041214b01e";

const fetchData = (city) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
  )
    .then((res) => res.json())
    .then((data) => showData(data))
    .catch((e) => console.log(e));
};

document.getElementById("search-btn").addEventListener("click", (e) => {
  const city = document.getElementById("search-input").value;

  fetchData(city);

  document.getElementById("search-input").value = "";
});

const innerText = (id, text) => {
  document.getElementById(id).innerText = text;
};

const showData = (data) => {
  if (data.cod === 200) {
    innerText("city-title", data.name);
    innerText("temp", data.main.temp);
    innerText("condition", data.weather[0].main);
    const url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("icon").setAttribute("src", url);
  }
};
