let sumbitBtn = document.querySelector(".hero__button");
let modalBtn = document.querySelector(".modal");
let modalPost2 = document.querySelector(".modal2");
let cancelBtn = document.querySelector(".modal-box__cancel");
let modalFileBtn = document.querySelector(".modal-box__file");
let modalBackBtn = document.querySelector(".modal-box__back");



sumbitBtn.addEventListener("click", function (){
    modalBtn.classList.add("modal-active");
})
cancelBtn.addEventListener("click", function (){
    modalBtn.classList.remove("modal-active");
})
modalFileBtn.addEventListener("click", function(){
    modalPost2.classList.add("modal2-active");
    modalBtn.classList.remove("modal-active");
})
modalBackBtn.addEventListener("click", function(){
    modalPost2.classList.remove("modal2-active");
    modalBtn.classList.add("modal-active");
})
