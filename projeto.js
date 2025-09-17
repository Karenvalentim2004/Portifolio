function openModal() {
      document.getElementById("projectModal").style.display = "flex";
    }

    function closeModal() {
      document.getElementById("projectModal").style.display = "none";
    }

    window.onclick = function(event) {
      let modal = document.getElementById("projectModal");
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }