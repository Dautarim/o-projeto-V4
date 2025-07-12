

import puppeteer from 'puppeteer'
const actres = "gem jewels";
(async ()=>{
    const chorme = await puppeteer.launch({headless: false})
    const page = await chorme.newPage()
    page.goto('https://www.pornpics.com/')
    await page.waitForSelector('.button-agree.btn-fill')
    await page.click('.button-agree.btn-fill')
    await page.type('.search__text.inpt-default',actres)
    await page.click('.search__submit.btn-light')
    await page.waitForSelector('.bio-toggle.dd_trigger')
    await page.click('.bio-toggle.dd_trigger')
        const birt = await page.evaluate(() => document.querySelectorAll('.item .value')[5].innerText)
        const countri = await page.evaluate(() => document.querySelectorAll('.item .value')[2].innerText)
        const about = await page.evaluate(() => document.querySelectorAll('.item .value')[12].innerText)
        const names = actres.split(" ")
        const linkImg = await page.evaluate(()=> document.querySelectorAll('.wookmark-initialised .thumbwook a img')[0].src)
        let fotos = await page.evaluate(() => {
            let formatado = ""
            for(var i = 0; i < 10; i++){
                formatado += `"${document.querySelectorAll('.wookmark-initialised .thumbwook a img')[i].src}",\n`}
            return formatado; })

    console.log(`{
      "nome": "${actres}",
      "linkImg": "${linkImg}",
      "linkSite": "https://pt.pornhub.com/video/search?search=${names[0]}+${names[1]}",
      "dataDeNascimento": "${birt}",
      "nacionalidade": "${countri}",
      "sobre": "${about}",
      "rs": {
          "onlyfans": "onlyfans.com/${names[0]}${names[1]}",
          "twiter": "https://twitter.com/${names[0]}${names[1]}"
      },
      "fotos": [${fotos}],
      "videos": []
  },`)

    // await page.click('.aa-SubmitButton')
    // await page.waitForFunction(()=> document.readyStatec === 'complete')
    // await chorme.close();
})()