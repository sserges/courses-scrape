const puppeteer = require('puppeteer')

async function run() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.traversymedia.com')

  //   await page.screenshot({ path: 'example1.png', fullPage: true })
  await page.pdf({ path: 'example1.pdf', format: 'A4' })

  await browser.close()
}

run()
