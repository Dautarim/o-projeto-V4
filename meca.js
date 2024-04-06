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
let bdy = document.querySelector("body")
let searcbt = document.querySelector("#botDePesquisa")
let elements = []


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
    await res.map((e, index)=>
    {
        container.innerHTML += 
        `<div class="card">
            <a href="star.html?id=${index}" class="lik">
                <div class="foto">
                    <img src="${e.linkImg}" alt="">
                </div>
                <div class="desc">
                    <p class="nm">
                        ${e.nome.toUpperCase()}
                    </p>
                    <span>
                        ${e.status.toUpperCase()}
                    </span>
                </div>
            </a> 
        </div>  `
    })
    

    elements = container.querySelectorAll(".card")
    // console.log(elements[4])
    
})();


async function hilight()
{
    const indiceList = []
    const nList = await pega()
    const listHilight = await nList.filter((e, index) => 
    {
        if (e.image_cut)
        {
            indiceList.push(index)
            return true
        }
        
    })
    
    const alea = Math.floor(Math.random() * listHilight.length)
    
    // console.log(listHilight)

    let nomeUp = listHilight[alea].nome

    land.innerHTML = `
            <div class="esquerda">
                <h1>
                    <sapn>${nomeUp.toUpperCase()}</sapn>
                </h1>

                <p>
                    ${listHilight[alea].sobre}
                </p>

                <div class="acoes">
                    <a href="star.html?id=${indiceList[alea]}"> Mais </a>
                    <a href="${listHilight[alea].linkSite}"> Assistir </a>
                </div>

            </div>
            <div class="direita">
                <div class="imgz">
                    <img src="images/${listHilight[alea].image_cut}" alt="apr">
                    <div class="blure"></div>
                </div>   
                
            </div>
        `
}

//============PESQUISA=======================

let tempo = null
function search(pesq)
{
    clearTimeout(tempo)

     

    tempo = setTimeout(()=> { 
        container.innerHTML = ""
        elements.forEach((e)=> 
    {
        let no = e.querySelector(".nm").innerText.toLowerCase()

        if(no.includes(pesq.target.value.toLowerCase()))
        {
            container.innerHTML += 
            `<div class="card">
                <a href="${e.querySelector(".lik").getAttribute('href')}" target="_blank">
                    <div class="foto">
                        <img src="${e.querySelector(".foto img").getAttribute('src')}" alt="">
                    </div>
                    <div class="desc">
                        <p class="nm">
                            ${e.querySelector(".nm").innerText.toUpperCase()}
                        </p>
                        <span>
                            ATIVA
                        </span>
                    </div>
                </a> 
            </div>  `
            console.log(e.querySelector(".nm").innerText)
            
        }

    })},1000)

}

document.querySelector("#searchImpt2").addEventListener("keyup", search)
document.querySelector("#searchImpt").addEventListener("keyup", search)

document.querySelector(".sandwich").addEventListener("click",()=>{
    document.querySelector(".bandas ul").classList.toggle("nulla")
    document.querySelector(".sandwich").classList.toggle("nulla")
})

setInterval(hilight,10000)



  
