const display = document.querySelector(".display");
const display1 = document.querySelector(".display1");
const dayy = document.querySelector(".day");

const clock = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  let time = "AM";
  if (hours >= 12) {
    time = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  display.innerHTML = `${day} . ${month} . ${year}`;
  dayy.innerHTML = `(${days[date.getDay()]})`;
  display1.innerHTML = `${hours}:${minutes}:${seconds} ${time}`;
};

setInterval(clock, 1000);
