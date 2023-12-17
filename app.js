let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let shareBtn = document.querySelector(".share-btn");
let close = document.getElementById("close");

let openModal = ()=>{
    modal.style.scale = 1;
    overlay.style.opacity = 1;
    overlay.style.pointerEvents = 'initial';
}

let closeModal = ()=>{
    modal.style.scale = 0;
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = 'none';
}

shareBtn.addEventListener('click',openModal);
overlay.addEventListener('click',closeModal);
close.addEventListener('click',closeModal);

