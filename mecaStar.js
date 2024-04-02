const urlParams = new URLSearchParams(window.location.search);

const endereco = urlParams.get("id") 

const nov = document.querySelector(".cont_video")

function alterna()
{
    document.querySelector(".p_foto").classList.toggle("atv") 
    document.querySelector(".p_video").classList.toggle("atv") 
    document.querySelector(".cont_foto").classList.toggle("atv") 
    document.querySelector(".cont_video").classList.toggle("atv") 
}

document.querySelector(".nav").addEventListener("click", alterna)