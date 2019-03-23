const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const {
    describe, test, beforeAll, afterAll
} = global;

describe('App', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch({
            // headless: false
        });

        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('links', async () => {
        await fs.mkdir('e2e/screens', { recursive: true }, () => {});
        await page.goto('http://localhost:8080/');
        const hrefs = await page.$$eval('a', as => as.map(a => a.href));
        await Promise.all(
            [
                await Promise.all([
                    page.goto(hrefs[0]),
                    page.screenshot({ path: path.resolve(__dirname, 'screens', `${hrefs[0].split('/').pop()}.png`) }),
                ]),
                await Promise.all([
                    page.goto(hrefs[1]),
                    page.screenshot({ path: path.resolve(__dirname, 'screens', `${hrefs[1].split('/').pop()}.png`) }),
                ]),
                await Promise.all([
                    page.goto(hrefs[2]),
                    page.screenshot({ path: path.resolve(__dirname, 'screens', `${hrefs[2].split('/').pop()}.png`) }),
                ]),
                await Promise.all([
                    page.goto(hrefs[3]),
                    page.screenshot({ path: path.resolve(__dirname, 'screens', `${hrefs[3].split('/').pop()}.png`) }),
                ]),
                await Promise.all([
                    page.goto(hrefs[4]),
                    page.screenshot({ path: path.resolve(__dirname, 'screens', `${hrefs[4].split('/').pop()}.png`) }),
                ]),
                await Promise.all([
                    page.goto(hrefs[5]),
                    page.screenshot({ path: path.resolve(__dirname, 'screens', `${hrefs[5].split('/').pop()}.png`) }),
                ])
            ]
        );
    });

    test('Search shows /shows', async () => {
        await fs.mkdir('e2e/screens/shows', { recursive: true }, () => {});
        await page.goto('http://localhost:8080/shows', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'shows/init.png') });
        await page.type('input[type="text"]', 'oz');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'shows/change.png') });
        await page.waitFor('[data-id]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'shows/data.png') });
        await page.click('[data-id]');
        await page.waitFor('[aria-label="Close"]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'shows/modal.png') });
        await page.click('[aria-label="Close"]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'shows/end.png') });
    });

    test('Search shows /context', async () => {
        await fs.mkdir('e2e/screens/context', { recursive: true }, () => {});
        await page.goto('http://localhost:8080/context', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'context/init.png') });
        await page.type('input[type="text"]', 'oz');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'context/change.png') });
        await page.waitFor('[data-id]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'context/data.png') });
        await page.click('[data-id]');
        await page.waitFor('[aria-label="Close"]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'context/modal.png') });
        await page.click('[aria-label="Close"]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'context/end.png') });
    });
    //
    test('Search shows /redux', async () => {
        await fs.mkdir('e2e/screens/redux', { recursive: true }, () => {});
        await page.goto('http://localhost:8080/redux', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'redux/init.png') });
        await page.type('input[type="text"]', 'oz');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'redux/change.png') });
        await page.waitFor('[data-id]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'redux/data.png') });
        await page.click('[data-id]');
        await page.waitFor('[aria-label="Close"]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'redux/modal.png') });
        await page.click('[aria-label="Close"]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'redux/end.png') });
    });
    //
    test('Search shows /mobx', async () => {
        await fs.mkdir('e2e/screens/mobx', { recursive: true }, () => {});
        await page.goto('http://localhost:8080/mobx', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'mobx/init.png') });
        await page.type('input[type="text"]', 'oz');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'mobx/change.png') });
        await page.waitFor('[data-id]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'mobx/data.png') });
        await page.click('[data-id]');
        await page.waitFor('[aria-label="Close"]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'mobx/modal.png') });
        await page.click('[aria-label="Close"]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'mobx/end.png') });
    });

    test('Search shows /angular', async () => {
        await fs.mkdir('e2e/screens/angular', { recursive: true }, () => {});
        await page.goto('http://localhost:8080/angular', { waitUntil: 'networkidle2' });
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'angular/init.png') });
        await page.type('input[type="text"]', 'oz');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'angular/change.png') });
        await page.waitFor('[data-id]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'angular/data.png') });
        await page.click('[data-id]');
        await page.screenshot({ path: path.resolve(__dirname, 'screens', 'angular/modal.png') });
    });
});
