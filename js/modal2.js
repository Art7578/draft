(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-m-open]"),
        closeModalBtn: document.querySelector("[data-modal-m-close]"),
        modal: document.querySelector("[data-modal-m]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden-m");
    }
})();