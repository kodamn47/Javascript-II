const input = document.getElementById("input");
const btnSubmit = document.getElementById("submit");
const ipAddress = document.getElementById("ipaddress");
const ipLocation = document.getElementById("iplocation");
const ipTimezone = document.getElementById("iptimezone");
const ipIsp = document.getElementById("ipisp");

const map = L.map("mapid", 16);

const showMap = (lat, lng) => {
  const icon = L.icon({
    iconUrl: "./images/icon-location.svg",
    iconSize: [40, 50],
    iconAnchor: [20, 25],
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  map.setView([lat, lng], 16);
  L.marker([lat, lng], { icon: icon }).addTo(map);
};

btnSubmit.addEventListener("click", getMap);

async function getMap(e) {
  e.preventDefault();
  const userInput = input.value || data;

  const apiKey = "at_wYiFiW6Z71zOZ6bqdq5dYiAOK2fhK";
  const response = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${userInput}&domain=${userInput}`
  );
  const data = await response.json();

  //console.log(data);

  const ip = data.ip;
  const region = data.location.region;
  const city = data.location.city;
  const country = data.location.country;
  const timezone = data.location.timezone;
  const isp = data.isp;
  const lat = data.location.lat;
  const lng = data.location.lng;

  ipAddress.textContent = ip;
  ipLocation.innerHTML = `${city}, ${region} <br> ${country}`;
  ipTimezone.textContent = "UTC " + timezone;
  ipIsp.textContent = isp;

  showMap(lat, lng);
  input.value = "";
}

showMap(41.89193, 12.51133);
