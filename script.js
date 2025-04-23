
function toggleSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

const prizes = [
  "Деф навсегда", "Деф на неделю", "Деф на 1 раз",
  "Скидка 25% на всё", "Скидка 25% на обучение",
  "Обучение ручному осинту", "1 бесплатный сват",
  "Подписка на гб на неделю", "Ничего", "Ничего", "Ничего"
];

function spin() {
  const lastSpin = localStorage.getItem("lastSpin");
  const now = new Date().getTime();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;

  if (lastSpin && now - parseInt(lastSpin) < oneWeek) {
    document.getElementById("resultText").innerText = "Можно крутить только раз в 7 дней!";
    return;
  }

  const wheel = document.getElementById("wheel");
  const spinAngle = 360 * 5 + Math.floor(Math.random() * 360);
  wheel.style.transform = `rotate(${spinAngle}deg)`;

  const sector = Math.floor((spinAngle % 360) / (360 / prizes.length));
  const prize = prizes[sector];

  setTimeout(() => {
    document.getElementById("resultText").innerText = "Вы выиграли: " + prize;
    localStorage.setItem("lastSpin", now.toString());
  }, 4500);
}
