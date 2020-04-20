const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');
const hbs = require('handlebars');
const data = require('./database.json');




const getPDF = function () {
    const filePath = path.join(__dirname,'templates','certificate.hbs')
    fs.readFile(filePath,(err, content) => {

        if (!err) {
            data.forEach( (el) => {
                let html = hbs.compile(content.toString())({name: el.name})
                exportPDF(html, `${el.name}`)
            })
        }
        else{
            console.log(err);
        }
    })
    
}




async function exportPDF(content, nameOfFile) {
        try{
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
    

            await page.setContent(content);
            await page.emulateMedia('screen');
            await page.pdf({
                path: `src/pdf/${nameOfFile}.pdf`,
                format: 'A4',
                printBackground: true
            })
            await browser.close();
            process.exit();
        }
        catch(e){
            console.log('Error: '+e);
        }
};

module.exports = getPDF