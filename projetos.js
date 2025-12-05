
// <!-- MODAL -->

const modal = document.getElementById("modal-projeto");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card").forEach(card => {
    card.querySelector(".open-modal").addEventListener("click", () => {

        document.getElementById("modal-title").textContent =
            card.dataset.title;

        document.getElementById("modal-img").src =
            card.dataset.img;

        document.getElementById("modal-date").textContent =
            card.dataset.date;

        document.getElementById("modal-desc").textContent =
            card.dataset.desc;

        document.getElementById("modal-preview").href =
            card.dataset.preview;

        modal.classList.add("show");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
});


        // VLibras

         <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
    <script>
        new window.VLibras.Widget('https://vlibras.gov.br/app');
    </script>

    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>AOS.init();</script>
