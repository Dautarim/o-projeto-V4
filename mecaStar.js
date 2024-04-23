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
let naci = document.querySelector("#nasc span") //adicionarei apos a atualização do banco de dados
let stat = document.querySelector("#sts span")
let biografia = document.querySelector(".biog p")
let caixaParavd = document.querySelector(".cont_video")
let caixaParaft = document.querySelector(".cont_foto")
let linkPornhub = document.querySelectorAll(".dir a")[0]
let linkOnlyfans = document.querySelectorAll(".dir a")[1]
let linkTwiter = document.querySelectorAll(".dir a")[2]
let wind = document.querySelector(".layer_foto")
let windimg = document.querySelector("#imgsel")
let divlist = null;

// console.log(wind);

(async ()=> {
    await fetch('starlist.json').then(res => res.json()).then((e) => 
    {
       imagemPrincipal.setAttribute('src', `${e[endereco].linkImg}`)
       nomeGrande.innerHTML = e[endereco].nome.toUpperCase()
       niver.innerHTML = e[endereco].dataDeNascimento.toUpperCase()
       biografia.innerHTML = e[endereco].sobre
       naci.innerHTML = e[endereco].nacionalidade
       stat.innerHTML = e[endereco].status

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

    divlist = document.querySelectorAll(".bldd")

    let nextStar = document.querySelector(".navStar.next a")
    let preuvStar = document.querySelector(".navStar.preuv a")
    
    if(endereco == 0)
    {
        nextStar.setAttribute("href",`star.html?id=${Number(endereco) + 1}`)
        preuvStar.setAttribute("href",`star.html?id=${Number(e.length) - 1}`)
    }
    else if(endereco == e.length)
    {
        nextStar.setAttribute("href",`star.html?id=${0}`)
        preuvStar.setAttribute("href",`star.html?id=${Number(endereco) - 1}`)
    }
    else
    {
        nextStar.setAttribute("href",`star.html?id=${Number(endereco) + 1}`)
        preuvStar.setAttribute("href",`star.html?id=${Number(endereco) - 1}`)
    }

    divlist.forEach((e) => {
    e.addEventListener('click', () => {
            let link = e.children[0].getAttribute("src")
            wind.classList.toggle("ative")
            windimg.setAttribute("src", link) 
           
        })
        });

    }
)})()







wind.addEventListener('click', ()=> wind.classList.toggle("ative"))

//AUTOMAZIN

//PORNPICS

// const imgs = document.querySelectorAll(".rel-link .ll-loaded")
// let formatado = ""
// for(var idx = 0; idx < 30; idx++){
//     formatado += `"${imgs[idx].src}",\n`
// }
// console.log(formatado)

//PORNHUB
// const linkVideo = document.querySelectorAll(".phimage a")
// let formatado = ""
// for(var idx = 0; idx < 8; idx++)
//     {
//         formatado += `"https://www.pornhub.com/ ${linkVideo[idx].href}",\n`
//     }
//     console.log(formatado)

//brazzers
//  var testo = document.querySelector("p.sc-1efjxte-1 font font").innerHTML 
//   var dat = document.querySelector("span.sc-szs79h-6 font font").innerHTML
//   var nac = document.querySelectorAll("span.sc-szs79h-6 font font")[1].innerHTML 
//       console.log(`
//             "dataDeNascimento": "${dat}",
//             "nacionalidade": "${nac}",
//             "sobre": "${testo}",
//             `) 

/*MENÇÃO HONROZA*/
/*https://pt.pornhub.com/view_video.php?viewkey=ph5f84a65ba1d43*/
