/* const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const navigationPromise = page.waitForNavigation()

    await page.goto('https://www.notitimba.com/lots/')

    await page.setViewport({ width: 1671, height: 1106 })

    await navigationPromise

    await browser.close()
    await page.screenshot({ path: `example-${browserType}.png` });
    console.log('hol :>> ')

})() */

const { chromium } = require('playwright');
(async () => {
    for (const browserType of ['chromium', 'firefox', 'webkit']) {
        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

        const navigationPromise = page.waitForNavigation()

        await page.goto('https://www.clarin.com')

        await page.setViewportSize({ width: 1671, height: 1106 })

        await navigationPromise
        await page.screenshot({ path: `example-${browserType}.png` });

        await browser.close()
    }
})()