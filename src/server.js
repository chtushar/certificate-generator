const express = require('express');
const path = require('path')

const app = express()
const PORT = process.env.PORT || 7000

app.get('', function (req, res) {

    let filePath = path.join(__dirname, 'index.html')
    res.sendFile(filePath);
})

app.listen(PORT, () => {
    console.log(`Serving at port ${PORT}`);
})