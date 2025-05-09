//your JS code here. If required.
 const modalOverlay = document.getElementById('modalOverlay');

    function openModal() {
      modalOverlay.style.display = 'flex';
    }

    function closeModal() {
      modalOverlay.style.display = 'none';
    }

    function handleOverlayClick(event) {
      if (event.target === modalOverlay) {
        closeModal();
      }
    }