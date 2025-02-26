function startCountdown() {
  const deadline = new Date("2025-03-29T23:59:59").getTime();
  const x = setInterval(function () {
      const now = new Date().getTime();
      const t = deadline - now;
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((t % (1000 * 60)) / 1000);
      document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      if (t < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "Expired";
      }
  }, 1000);
}
window.onload = startCountdown;
