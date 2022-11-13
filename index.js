const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.traversymedia.com')

  //   await page.screenshot({ path: 'example1.png', fullPage: true })
  //   await page.pdf({ path: 'example1.pdf', format: 'A4' })
  //   const html = await page.content()

  //   const title = await page.evaluate(() => document.title)

  // const text = await page.evaluate(() => document.body.innerText)

  const links = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a'), (e) => e.href)
  )
  console.log(links)

  await browser.close()
}

run()
