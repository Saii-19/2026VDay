const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* NO button moving inside screen */
if (noBtn) {

    noBtn.addEventListener("mouseenter", function () {

        const padding = 20;

        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });
}

/* Heart Explosion when YES clicked */
if (yesBtn) {

    yesBtn.addEventListener("click", function () {

        for (let i = 0; i < 30; i++) {
            let heart = document.createElement("div");

            heart.innerHTML = "❤️";
            heart.style.position = "fixed";
            heart.style.left = "50%";
            heart.style.top = "50%";
            heart.style.fontSize = "24px";
            heart.style.pointerEvents = "none";
            heart.style.transition = "1s ease-out";
            heart.style.transform = "translate(-50%, -50%)";

            document.body.appendChild(heart);

            let x = (Math.random() - 0.5) * 800;
            let y = (Math.random() - 0.5) * 800;

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
