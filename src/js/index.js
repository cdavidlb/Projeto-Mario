const botao = document.querySelector(".botao");
const modal = document.querySelector(".modal");
const botaofecharmodal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

    function alternarModal(){
        modal.classList.toggle("aberto")
    }

botao.addEventListener("click", () => {
    alternarModal()
    video.setAttribute("src", linkDoVideo)
});


botaofecharmodal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
})


