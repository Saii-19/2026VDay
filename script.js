document.addEventListener("DOMContentLoaded", function () {

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const box = document.querySelector(".box");


    /* =============================
       ULTRA ESCAPE "NO" BUTTON
    ============================== */

    if (noBtn && box) {

        // Keep initial position normal
        noBtn.style.position = "relative";

        box.addEventListener("mousemove", function (e) {

            const btnRect = noBtn.getBoundingClientRect();

            const btnCenterX = btnRect.left + btnRect.width / 2;
            const btnCenterY = btnRect.top + btnRect.height / 2;

            const distance = Math.sqrt(
                Math.pow(e.clientX - btnCenterX, 2) +
                Math.pow(e.clientY - btnCenterY, 2)
            );

            // If cursor gets within 120px, teleport
            if (distance < 120) {

                const boxRect = box.getBoundingClientRect();

                const maxX = boxRect.width - btnRect.width - 20;
                const maxY = boxRect.height - btnRect.height - 20;

                const randomX = Math.random() * maxX;
                const randomY = Math.random() * maxY;

                noBtn.style.position = "absolute";
                noBtn.style.left = randomX + "px";
                noBtn.style.top = randomY + "px";
            }
        });

        // Extra protection (even if spam clicked)
        noBtn.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
        });
    }


    /* =============================
       YES BUTTON HEART EXPLOSION
    ============================== */

    if (yesBtn) {

        yesBtn.addEventListener("click", function () {

            for (let i = 0; i < 30; i++) {

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

                const x = (Math.random() - 0.5) * 700;
                const y = (Math.random() - 0.5) * 700;

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
