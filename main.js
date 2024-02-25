const listaDeTeclas = document.querySelectorAll(".tecla");
  
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

listaDeTeclas.forEach(tecla =>{
    tecla.addEventListener("click", ()=>{
        const instrumentos = tecla.classList[1];
        const idAudio = `#som_${instrumentos}`
        tocaSom(idAudio)
    })

    tecla.onkeydown = function(event){
        if(event.code === "Space" || event.code === "Enter"){
            tecla.classList.add("ativa");
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
})