document.addEventListener("DOMContentLoaded", function () {

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const buttonContainer = document.querySelector(".buttons");

    /* ------------ NO BUTTON MOVES INSIDE BUTTON AREA ------------ */

    if (noBtn && buttonContainer) {

        // Set initial position
        noBtn.style.left = "120px";
        noBtn.style.top = "0px";

        noBtn.addEventListener("mouseenter", function () {

            const containerRect = buttonContainer.getBoundingClientRect();

            const maxX = containerRect.width - noBtn.offsetWidth;
            const maxY = containerRect.height + 20;

            const x = Math.random() * maxX;
            const y = Math.random() * maxY;

            noBtn.style.left = x + "px";
            noBtn.style.top = y + "px";
        });
    }

    /* ------------ YES BUTTON HEART EXPLOSION + REDIRECT ------------ */

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

                const x = (Math.random() - 0.5) * 600;
                const y = (Math.random() - 0.5) * 600;

                setTimeout(() => {
                    heart.style.transform = `translate(${x}px, ${y}px)`;
                    heart.style.opacity = "0";
                }, 10);

                setTimeout(() => {
                    heart.remove();
                }, 1000);
            }

            setTimeout(() => {
                window.location.href = "page2.html";
            }, 900);
        });
    }

});
