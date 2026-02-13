const noBtn = document.getElementById("noBtn");

if (noBtn) {
    noBtn.addEventListener("mouseenter", function () {
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
}
