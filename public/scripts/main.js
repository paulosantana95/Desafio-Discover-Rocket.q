import Modal from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

//Pegar todos os botões com a classe 'check'

const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach (button => {
    //adicionar a escuta
    button.addEventListener("click", handleClick);
})


// Quando botão delete for clicado ele irá abrir a modal.

const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach (button => {
    //adicionar a escuta
    button.addEventListener("click", (event) => handleClick(event, false));
})

function handleClick(event, check = true) {

    event.preventDefault();

    const text = check ? "Marcar como lido" : "Excluir"

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");


    //abrir modal
    modal.open();
}


//pegar o quando o marcar como lido for clicado




//Abrir modal