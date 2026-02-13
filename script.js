document.addEventListener("DOMContentLoaded", function () {

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const buttonContainer = document.querySelector(".buttons");

    /* ---------------- NO BUTTON SMART MOVE ---------------- */

    if (noBtn && buttonContainer) {

        let isActivated = false;

        noBtn.addEventListener("mouseenter", function () {

            const containerRect = buttonContainer.getBoundingClientRect();
            const btnRect = noBtn.getBoundingClientRect();

            // On first hover convert to absolute without jumping
            if (!isActivated) {
                isActivated = true;

                const offsetLeft = btnRect.left - containerRect.left;
                const offsetTop = btnRect.top - containerRect.top;

                noBtn.style.position = "absolute";
                noBtn.style.left = offsetLeft + "px";
                noBtn.style.top = offsetTop + "px";
            }

            const maxX = buttonContainer.offsetWidth - noBtn.offsetWidth;
            const maxY = buttonContainer.offsetHeight;

            const x = Math.random() * maxX;
            const y = Math.random() * maxY;

            noBtn.style.left = x + "px";
            noBtn.style.top = y + "px";
        });
    }

    /* ---------------- YES BUTTON HEART EXPLOSION ---------------- */

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
