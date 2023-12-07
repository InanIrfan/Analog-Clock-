document.addEventListener("DOMContentLoaded", function () {
    const hourHand = document.querySelector(".hand.hour");
    const minuteHand = document.querySelector(".hand.minute");
    const secondHand = document.querySelector(".hand.second");
    const modeSwitch = document.querySelector(".mode-switch");
    const body = document.body;
  
    function updateClock() {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
  
      const hourDeg = hours * 30 + minutes * 0.5;
      const minuteDeg = minutes * 6 + seconds * 0.1;
      const secondDeg = seconds * 6;
  
      hourHand.style.transform = `rotate(${hourDeg}deg)`;
      minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
      secondHand.style.transform = `rotate(${secondDeg}deg)`;
    }
  
    function toggleDarkMode() {
      body.classList.toggle("dark");
    }
  
    setInterval(updateClock, 1000);
  
    modeSwitch.addEventListener("click", toggleDarkMode);
  });
  