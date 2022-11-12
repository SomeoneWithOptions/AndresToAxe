function tooLong() {
  const fiveYears = new Date("Aug 02, 2026 00:00:00").getTime();
  const currentDate = new Date().getTime();
  const gap = fiveYears - currentDate;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const years = days * 365;

  document.getElementById("years").innerText = Math.floor(gap / years);
  document.getElementById("days").innerText = Math.floor((gap % years) / days);
  document.getElementById("hours").innerText = Math.floor((gap % days) / hours);
  document.getElementById("minutes").innerText = Math.floor(
    (gap % hours) / minutes
  );
  document.getElementById("seconds").innerText = Math.floor(
    (gap % minutes) / seconds
  );
}

function changeColors() {
  const colors = {
    1: ["#f6178e", "#ffffff"],
    2: ["#3dfb8b", "#141414"],
    3: ["#1859C2", "#ffffff"],
    4: ["#BDE0FE", "#141414"],
    5: ["#FFEF88", "#141414"],
    6: ["#000000", "#ffffff"],
    7: ["#ffd6ff", "#141414"],
    8: ["#200046", "#ffffff"],
    9: ["#ffd6a5", "#141414"],
    10: ["#036666", "#ffffff"],
  };
  let picked = Math.floor(Math.random() * Object.keys(colors).length) + 1;

  let background = colors[picked][0];
  let fontColor = colors[picked][1];

  let instagramIcon = document.getElementById("instagram-icon");
  let whatsappIcon = document.getElementById("whatsapp-icon");
  let gitHubIcon = document.getElementById("github-icon");
  let contactLink = document.getElementById("contact");
  let body = document.getElementsByTagName("body")[0];

  body.style.backgroundColor = background;
  body.style.color = fontColor;
  contactLink.style.color = fontColor;
  console.log(fontColor);
  if (fontColor === "#ffffff") {
    instagramIcon.style.filter = "invert(0)";
    whatsappIcon.style.filter = "invert(1)";
    gitHubIcon.style.filter = "invert(1)";
  } else {
    instagramIcon.style.filter = "invert(1)";
    whatsappIcon.style.filter = "invert(0)";
    gitHubIcon.style.filter = "invert(0)";
  }
}

setInterval(() => tooLong(), 1000);
document.addEventListener("click", changeColors);
