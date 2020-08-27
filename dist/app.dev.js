"use strict";

var api = {
  key: '1dcb8c1d3f4fa9eaae971d7ca6c0b6f2',
  base: 'https://api.openweathermap.org/data/2.5/'
};
var searchbox = document.querySelector('.search-box');
var city = document.querySelector('.city');
var today = document.querySelector('.date');
var months, days, now, day, date, month, year;
var temp = document.querySelector('.temp');
var currentWeather = document.querySelector('.current .weather');
var hilow = document.querySelector('.hi-low');
var gif = document.querySelector('.giphy-embed');
var container = document.querySelector('.container');
var icons = document.querySelectorAll('.icon');
var toggleSwitch = document.querySelector('input[type="checkbox"]');
var toggleIcon = document.getElementById('toggle-icon');
var DARK_THEME = 'dark';
var LIGHT_THEME = 'light'; //function to activate the search box

function setQuery(event) {
  if (event.keyCode == 13) {
    getResults(searchbox.value);
  }
} //function to get the results from the API


function getResults(query) {
  fetch("".concat(api.base, "weather?q=").concat(query, "&units=metric&APPID=").concat(api.key)).then(function (weather) {
    return weather.json();
  }).then(displayResults);
} //function to display the results


function displayResults(weather) {
  city.innerHTML = "".concat(weather.name, ", ").concat(weather.sys.country);
  now = new Date();
  today.innerHTML = dateBuilder(now);
  temp.innerHTML = "".concat(Math.round(weather.main.temp), "<span>\xB0C</span>");
  currentWeather.innerHTML = weather.weather[0].main;
  hilow.innerHTML = "".concat(Math.round(weather.main.temp_min), "\xB0C / ").concat(Math.round(weather.main.temp_max), "\xB0C");
  modify();
} //function to get date


function dateBuilder(d) {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  day = days[d.getDay()];
  date = d.getDate();
  month = months[d.getMonth()];
  year = d.getFullYear();
  return "".concat(day, " ").concat(date, " ").concat(month, " ").concat(year);
} //change the gif and colors depending of current weather


function modify() {
  switch (currentWeather.innerHTML) {
    case 'Clear':
      gif.src = 'https://giphy.com/embed/3o6MbrWIwRymoCWOOc';
      container.style.color = 'var(--color1)';
      searchbox.style.borderColor = 'var(--color1)';
      document.body.style.backgroundColor = 'var(--color1)';
      break;

    case 'Clouds':
      gif.src = 'https://giphy.com/embed/3orieVMOn4shuIpu0g';
      container.style.color = 'var(--color2)';
      searchbox.style.borderColor = 'var(--color2)';
      document.body.style.backgroundColor = 'var(--color2)';
      break;

    case 'Rain':
      gif.src = 'https://giphy.com/embed/xT5LMzgthGD3zJJVII';
      container.style.color = 'var(--color3)';
      searchbox.style.borderColor = 'var(--color3)';
      document.body.style.backgroundColor = 'var(--color3)';
      break;

    case 'Mist':
      gif.src = 'https://giphy.com/embed/xT5LMGcA49t8Z9Hgru';
      container.style.color = 'var(--color4)';
      searchbox.style.borderColor = 'var(--color4)';
      document.body.style.backgroundColor = 'var(--color4)';
      break;

    case 'Smoke':
      gif.src = 'https://giphy.com/embed/3o6Mbn2VHRx49Twyje';
      container.style.color = 'var(--color5)';
      searchbox.style.borderColor = 'var(--color5)';
      document.body.style.backgroundColor = 'var(--color5)';
      break;

    case 'Thunderstorm':
      gif.src = 'https://giphy.com/embed/l2Je7JWmHS6HqEC3K';
      container.style.color = 'var(--color6)';
      searchbox.style.borderColor = 'var(--color6)';
      document.body.style.backgroundColor = 'var(--color6)';
      break;

    case 'Drizzle':
      gif.src = 'https://giphy.com/embed/xT5LMF7gKfQyVDEzbW';
      container.style.color = 'var(--color7)';
      searchbox.style.borderColor = 'var(--color7)';
      document.body.style.backgroundColor = 'var(--color7)';
      break;

    case 'Haze':
      gif.src = 'https://giphy.com/embed/xT5LMOH9N7IySOPyG4';
      container.style.color = 'var(--color8)';
      searchbox.style.borderColor = 'var(--color8)';
      document.body.style.backgroundColor = 'var(--color8)';
      break;

    case 'Dust':
      gif.src = 'https://giphy.com/embed/3o6MbaJFu6zMHwglxe';
      container.style.color = 'var(--color9)';
      searchbox.style.borderColor = 'var(--color9)';
      document.body.style.backgroundColor = 'var(--color9)';
      break;

    case 'Fog':
      gif.src = 'https://giphy.com/embed/xT5LMRPPN5Wy9p00kU';
      container.style.color = 'var(--color10)';
      searchbox.style.borderColor = 'var(--color10)';
      document.body.style.backgroundColor = 'var(--color10)';
      break;

    case 'Sand':
      gif.src = 'https://giphy.com/embed/3o6MbcQdbPpKddu7rq';
      container.style.color = 'var(--color11)';
      searchbox.style.borderColor = 'var(--color11)';
      document.body.style.backgroundColor = 'var(--color11)';
      break;

    case 'Dust':
      gif.src = 'https://giphy.com/embed/3o6MbaJFu6zMHwglxe';
      container.style.color = 'var(--color12)';
      searchbox.style.borderColor = 'var(--color12)';
      document.body.style.backgroundColor = 'var(--color12)';
      break;

    case 'Ash':
      gif.src = 'https://giphy.com/embed/xT5LMHkEg6runrYJuo';
      container.style.color = 'var(--color13)';
      searchbox.style.borderColor = 'var(--color13)';
      document.body.style.backgroundColor = 'var(--color13)';
      break;

    case 'Squall':
      gif.src = 'https://giphy.com/embed/xT5LMGcA49t8Z9Hgru';
      container.style.color = 'var( --color14)';
      searchbox.style.borderColor = 'var( --color14)';
      document.body.style.backgroundColor = 'var(--color14)';
      break;

    case 'Tornado':
      gif.src = 'https://giphy.com/embed/3orieZMmRdBlKk5nY4';
      container.style.color = 'var(--color15)';
      searchbox.style.borderColor = 'var(  --color15)';
      document.body.style.backgroundColor = 'var(--color15)';
      break;

    default:
      gif.src = 'https://giphy.com/embed/l0G18ECWmSOhDW8N2';
      container.style.color = 'var(--secondary-color)';
      searchbox.style.borderColor = 'var(--secondary-color)';
      break;
  }
} //function to switch theme


function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME);
    localStorage.setItem('theme', DARK_THEME);
<<<<<<< HEAD
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    localStorage.setItem('theme', LIGHT_THEME);
    toggleDarkLightMode(false);
=======
    toggleDarkLightMode('dark');
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    localStorage.setItem('theme', LIGHT_THEME);
    toggleDarkLightMode('light');
>>>>>>> 89908b4bedff2d3f9ebf07edfebc6027370645d1
  }
}

function toggleDarkLightMode(isDark) {
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
} //event listeners


searchbox.addEventListener('keypress', setQuery);
toggleSwitch.addEventListener('change', switchTheme); //check for local storage for theme

var currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    darkMode();
  }
}