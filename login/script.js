const loginEl = document.querySelector("#login");
const modalContainerEl = document.querySelector(".modalContainer");
const closeModalEl = document.querySelector("#closeModal");
const cancelModalEl = document.querySelector("#cancel");
const body = document.body;

const hideModal = () => {
  modalContainerEl.classList.add("hide");
  body.classList.remove("overLay");
};

loginEl.addEventListener("click", () => {
  modalContainerEl.classList.remove("hide");
  body.classList.add("overLay");
});

closeModalEl.addEventListener("click", hideModal);
cancelModalEl.addEventListener("click", hideModal);
