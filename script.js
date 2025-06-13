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
