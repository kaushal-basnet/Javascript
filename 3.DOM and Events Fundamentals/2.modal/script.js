"use strict";
//creating variable
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
// querySelectorAll uses to get all "show-modal" class
const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);

//Removing className = 'hidden'
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//Adding className = 'hidden'
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++)
  //if we call our function with parenthesis(), JavaScript will execute the function then and there, but we need to call the function on button click. So for this we need to pass the function definition.
  btnsOpenModal[i].addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key)
  //if modal does not contains classname hidden then close modal with "Esc" key from keyboard
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
