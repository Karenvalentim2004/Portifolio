
    const cards = document.querySelectorAll(".open-modal");
    const modal = document.getElementById("modal");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            document.getElementById("modal-img").src = card.dataset.img;
            document.getElementById("modal-title").innerText = card.dataset.title;
            document.getElementById("modal-date").innerText = card.dataset.date;
            document.getElementById("modal-desc").innerText = card.dataset.desc;

            modal.classList.add("show");
        });
    });

