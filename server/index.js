const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('PicVoyage'));

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on ${port}`));