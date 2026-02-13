document.addEventListener("DOMContentLoaded", function () {

    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");

    /* ---------------------------
       FIX 1: NO BUTTON MOVES 
       INSIDE SCREEN ONLY
    ---------------------------- */

    if (noBtn) {

        noBtn.style.position = "fixed";

        noBtn.addEventListener("mouseenter", function () {

            const btnWidth = noBtn.offsetWidth;
            const btnHeight = noBtn.offsetHeight;

            const maxX = window.innerWidth - btnWidth - 10;
            const maxY = window.innerHeight - btnHeight - 10;

            const x = Math.max(0, Math.random() * maxX);
            const y = Math.max(0, Math.random() * maxY);

            noBtn.style.left = x + "px";
            noBtn.style.top = y + "px";
        });
    }


    /* ---------------------------
       FIX 2: YES BUTTON CLICK
       HEART EXPLOSION + REDIRECT
    ---------------------------- */

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
