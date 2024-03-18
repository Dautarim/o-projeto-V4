/*=====Bara de rolagem fixe=================================*/
let barra = document.createElement("div")

let topzao = document.querySelector(".top")


document.body.appendChild(barra)

barra.setAttribute("class","vvv")
barra.style.height = "8px"
barra.style.width = "0px"
barra.style.backgroundColor = "var(--princip)"
barra.style.position = "fixed"
barra.style.top = "0px"
barra.style.left = "0px"
barra.style.transition = "0.2s"
barra.style.zIndex = "9999"

function pegaposicao(ep){
    const posicao = window.scrollY
    const altura = document.body.offsetHeight
    let percentual = (window.pageYOffset * 100)/altura
    // console.log(percentual)
    // console.log(ep)

    barra.style.width = percentual+"%"

    if(posicao == 0)
    {
        ep.style.dysplay = "none"
    }
}

window.addEventListener("scroll", pegaposicao(topzao))

/*=================================================================*/
/*Goto-Top*/

topzao.addEventListener("click",()=>{
    window.scrollTo({ top : 0, behavior : "smooth"})
})

/*==========================Add Stars on painel=======================================*/
let container = document.querySelector(".passarela")
let land = document.querySelector(".landing")
let searcbt = document.querySelector("#botDePesquisa")
let bdy = document.querySelector("body")


function ccc()
{
    searcbt.querySelector("input").focus()
    searcbt.classList.toggle("mec")
}

searcbt.addEventListener("click", (e)=>
{

    if(e.target != searcbt.querySelector("input"))
        {
            ccc()

        }
})
bdy.addEventListener("click", (e) => 
{

    if(e.target != searcbt && e.target != searcbt.querySelector("input") && e.target != searcbt.querySelector("i") && searcbt.classList.length == 3 )
    {
        // console.log()
        ccc()
        
    }
})

window.addEventListener("scroll",pegaposicao(searcbt))

async function pega() {
    const list = await fetch('./starlist.json').then(res => res.json());
    //console.log(list);  pra ver se pegou
    return list;
} 

(async () => {
    const res = await pega();
    // await res.map((e)=>
    // {
    //     let nomeUP = e.nome
    //     container.innerHTML += 
    //     `<div class="card">
    //     <a href="${e.linkSite}" target="_blank">
    //     <div class="foto">
    //         <img src="${e.linkImg}" alt="">
    //     </div>
    //     <div class="desc">
    //         <p>
    //             ${nomeUP.toUpperCase()}
    //         </p>
    //         <span>
    //             35 Anos
    //         </span>
    //         </a> </div>  `
    // })
    // console.log(res)
    
})();

async function hilight()
{
    
    const nList = await pega()
    const listHilight = await nList.filter(e => e.image_cut)
    const alea = await Math.floor(Math.random() * listHilight.length)
    console.log(alea)
    console.log(listHilight)

    let nomeUp = listHilight[alea].nome

    // land.innerHTML = `
    //         <div class="esquerda">
    //             <h1>
    //                 <sapn>${nomeUp.toUpperCase()}</sapn>
    //             </h1>

    //             <p>
    //                 ${listHilight[alea].sobre}
    //             </p>

    //             <div class="acoes">
    //                 <a href="#"> Mais </a>
    //                 <a href="#"> Assistir </a>
    //             </div>

    //         </div>
    //         <div class="direita">
    //             <div class="imgz">
    //                 <img src="images/${listHilight[alea].image_cut}" alt="apr">
    //                 <div class="blure"></div>
    //             </div>   
                
    //         </div>
    //     `
}

function search(set)
{

    let sevPadrao = document.getElementById("searchImpt")

    console.log(sevPadrao)
    if(set != 1)
    {
        sevPadrao = document.getElementById("searchImpt2")
    }

    let nList =  container.querySelectorAll(".card")
    nList.forEach((e)=>
    {
        let pesquisa = sevPadrao.value
        pesquisa = pesquisa.toLowerCase()
        
        
        let nomedela = e.querySelector('p').innerText
        nomedela = nomedela.toLowerCase()

        if(!nomedela.includes(pesquisa))
        {
            e.style.display = "none"
            console.log(e)
        }
        else
        {
            e.style.display = "blok"
        }
        
    })


} 

function oi()
{
    console.log("oi")
}

// const imptSrc1 = document.querySelector("#searchImpt")
// const imptSrc2 = document.querySelector("#searchImpt2")

// imptSrc1.addEventListener("keyup", search(1))
// imptSrc2.addEventListener("keyup", search(2))

setInterval(hilight,5000)



  
