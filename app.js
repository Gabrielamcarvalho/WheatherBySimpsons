const api = {
  key: '1dcb8c1d3f4fa9eaae971d7ca6c0b6f2',
  base: 'https://api.openweathermap.org/data/2.5/',
};

const searchbox = document.querySelector('.search-box');
const city = document.querySelector('.city');
const today = document.querySelector('.date');
const temp = document.querySelector('.temp');
const currentWeather = document.querySelector('.current .weather');
const hilow = document.querySelector('.hi-low');
const gif = document.querySelector('.giphy-embed');
const container = document.querySelector('.container');
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';
let months;
let days;
let now;
let day;
let date;
let month;
let year;

// change the gif and colors depending of current weather
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
}
// function to get date
function dateBuilder(d) {
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  day = days[d.getDay()];
  date = d.getDate();
  month = months[d.getMonth()];
  year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

// function to display the results
function displayResults(weather) {
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

  now = new Date();
  today.innerHTML = dateBuilder(now);

  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  currentWeather.innerHTML = weather.weather[0].main;

  hilow.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max,
  )}°C`;
  modify();
}
// function to get the results from the API
function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(
      (weather) => weather.json(),
    )
    .then(displayResults);
}

// function to activate the search box
function setQuery(event) {
  if (event.keyCode === 13) {
    getResults(searchbox.value);
  }
}

function toggleDarkLightMode(isDark) {
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  if (isDark) {
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  } else {
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  }
}
// function to switch theme
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME);
    localStorage.setItem('theme', DARK_THEME);
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    localStorage.setItem('theme', LIGHT_THEME);
    toggleDarkLightMode(false);
  }
}

// event listeners
searchbox.addEventListener('keypress', setQuery);
toggleSwitch.addEventListener('change', switchTheme);

// check for local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode();
  }
}
