document.addEventListener("DOMContentLoaded", function () {

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const container = document.querySelector(".buttons");

    /* ------------ NO BUTTON ESCAPE ------------ */

    if (noBtn && container) {

        noBtn.addEventListener("mouseenter", function () {

            const maxX = container.offsetWidth - noBtn.offsetWidth;
            const maxY = container.offsetHeight - noBtn.offsetHeight;

            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;

            noBtn.style.left = randomX + "px";
            noBtn.style.top = randomY + "px";
        });
    }

    /* ------------ YES BUTTON ------------ */

    if (yesBtn) {

        yesBtn.addEventListener("click", function () {

            for (let i = 0; i < 25; i++) {

                const heart = document.createElement("div");
                heart.innerHTML = "❤️";
                heart.style.position = "fixed";
                heart.style.left = "50%";
                heart.style.top = "50%";
                heart.style.fontSize = "24px";
                heart.style.pointerEvents = "none";
                heart.style.transform = "translate(-50%, -50%)";
                heart.style.transition = "1s ease-out";

                document.body.appendChild(heart);

                c
