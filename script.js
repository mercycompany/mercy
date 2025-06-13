document.addEventListener("DOMContentLoaded", function () {
    const trigger = document.getElementById("secret-trigger");
    const message = document.getElementById("secret-message");
    const secretSymbol = document.getElementById("secret-symbol");
    let clickCount = 0;
    const secretLink = "https://t.me/share/url?url=https://t.me/weaksaredie&text=Контактируй: @mercy4ever"; // Ссылка на Telegram-профиль

    if (trigger) {
        trigger.addEventListener("click", function (e) {
            e.preventDefault();
            if (message) {
                message.style.display = "block";
            }
            showNotification();
        });
    }

    if (secretSymbol) {
        secretSymbol.addEventListener("click", function () {
            clickCount++;

            if (clickCount === 5) {
                window.open(secretLink, "_blank"); // Открываем Telegram с текстом
                clickCount = 0; // Сбрасываем счетчик
            }
        });
    }
});

// Удалите или закомментируйте createBgCircles и createBgCrosses

(function networkLinesBackground() {
  const canvas = document.getElementById('bg-anim');
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener('resize', resize);

  // Настройки
  const POINTS = 25;
  const MAX_DIST = 320;
  const points = [];

  // Для мигания текста
  let startTime = Date.now();

  // Инициализация точек
  for (let i = 0; i < POINTS; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2
      // trail больше не нужен
    });
  }

  function animate() {
    // Эффект следа (если нужен лёгкий фон, иначе замените на clearRect)
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = "#181820";
    ctx.fillRect(0, 0, width, height);
    ctx.globalAlpha = 1;

    // ====== ОТРИСОВКА ТЕКСТА "Mercy" ======
    const time = (Date.now() - startTime) / 1000;
    const blink = 0.5 + 0.5 * Math.sin(time * Math.PI);
    ctx.save();
    ctx.globalAlpha = 0.18 + 0.32 * blink;
    ctx.font = `bold ${Math.floor(width / 7)}px 'Segoe UI', Arial, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.shadowColor = "#fff";
    ctx.shadowBlur = 22;
    ctx.fillStyle = "#fff";
    ctx.fillText("Mercy", width / 2, height * 0.03);
    ctx.restore();
    // ====== КОНЕЦ ОТРИСОВКИ ТЕКСТА ======

    // Движение точек
    for (let p of points) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }

    // Рисуем линии между близкими точками
    for (let i = 0; i < POINTS; i++) {
      for (let j = i + 1; j < POINTS; j++) {
        const p1 = points[i], p2 = points[j];
        const dx = p1.x - p2.x, dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          ctx.save();
          ctx.globalAlpha = 0.5 + 0.5 * (1 - dist / MAX_DIST);
          ctx.strokeStyle = "#fff";
          ctx.lineWidth = 3.2;
          ctx.shadowColor = "#fff";
          ctx.shadowBlur = 16;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    // Удалите/закомментируйте этот блок:
    // for (let p of points) {
    //   for (let t = 1; t < p.trail.length; t++) {
    //     const prev = p.trail[t - 1];
    //     const curr = p.trail[t];
    //     ctx.save();
    //     ctx.globalAlpha = 0.02 * t;
    //     ctx.strokeStyle = "#fff";
    //     ctx.lineWidth = 2;
    //     ctx.beginPath();
    //     ctx.moveTo(prev.x, prev.y);
    //     ctx.lineTo(curr.x, curr.y);
    //     ctx.stroke();
    //     ctx.restore();
    //   }
    // }

    requestAnimationFrame(animate);
  }

  animate();
})();

function showNotification() {
    let notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText = "Ты знаешь что делать.";
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}
