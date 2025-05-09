 const modalOverlay = document.getElementById("modalOverlay");

    function openModal() {
      modalOverlay.style.display = "flex";
    }

    function closeModal() {
      modalOverlay.style.display = "none";
    }

    function handleOverlayClick(e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    }

    // Optional: Add listener to #openModal in case Cypress needs dynamic JS
    document.getElementById("openModal").addEventListener("click", openModal);