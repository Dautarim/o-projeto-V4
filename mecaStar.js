const urlParams = new URLSearchParams(window.location.search);

const endereco = urlParams.get("id") 

// const nov = document.querySelector(".cont_video")

function alterna()
{
    document.querySelector(".p_foto").classList.toggle("atv") 
    document.querySelector(".p_video").classList.toggle("atv") 
    document.querySelector(".cont_foto").classList.toggle("atv") 
    document.querySelector(".cont_video").classList.toggle("atv") 
}

document.querySelector(".nav").addEventListener("click", alterna)

//===variavei =======================
let imagemPrincipal = document.querySelector(".img_box img")
let nomeGrande = document.querySelector(".nome h2")
let niver = document.querySelector("#niv span")
let nasci = document.querySelector("#nasc span") //adicionarei apos a atualização do banco de dados
let stat = document.querySelector("#sts span")
let biografia = document.querySelector(".biog p")
let caixaParavd = document.querySelector(".cont_video")
let caixaParaft = document.querySelector(".cont_foto")
let linkPornhub = document.querySelectorAll(".dir a")[0]
let linkOnlyfans = document.querySelectorAll(".dir a")[1]
let linkTwiter = document.querySelectorAll(".dir a")[2];

// console.log(imagemPrincipal);

(async ()=> {
    await fetch('starlist.json').then(res => res.json()).then((e) => 
    {
       imagemPrincipal.setAttribute('src', `${e[endereco].linkImg}`)
       nomeGrande.innerHTML = e[endereco].nome.toUpperCase()
       niver.innerHTML = e[endereco].dataDeNascimento.toUpperCase()
       biografia.innerHTML = e[endereco].sobre

       linkPornhub.setAttribute("href",`${e[endereco].linkSite}`)
       if(e[endereco].rs.onlyfans != "")
       {
            linkOnlyfans.setAttribute("href",`${e[endereco].rs.onlyfans}`)
       }
       if(e[endereco].rs.twiter != "")
       {
            linkOnlyfans.setAttribute("href",`${e[endereco].rs.twiter}`)
       }

       caixaParaft.innerHTML = ""

       e[endereco].fotos.forEach((e) =>
       {
            caixaParaft.innerHTML += 
            `
                <div class="bldd">
                    <img src="${e}" alt="">
                </div>
            `
       })

       caixaParavd.innerHTML = ""

       e[endereco].videos.forEach((e) =>
       {
            caixaParavd.innerHTML += 
            `
            <div class="bx-vd">
                <iframe src="${e}" frameborder="0" width="245" height="155" scrolling="no" allowfullscreen></iframe>
            </div>
            `
       })

    //    if(e[endereco].)
        // console.log(e[endereco])
    }
)})()

