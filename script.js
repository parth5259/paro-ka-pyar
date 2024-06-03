const startDate = new Date("2020-06-06");
const timerElement = document.getElementById("timer");

function updateTime() {
  const now = new Date();
  const differenceInMs = now.getTime() - startDate.getTime();
  const days = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((differenceInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((differenceInMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differenceInMs % (1000 * 60)) / 1000);

  timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

updateTime();
setInterval(updateTime, 1000);
