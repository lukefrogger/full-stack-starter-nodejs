const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.post('/new-route', (req,res) => {
    let name = req.body.name;
    res.send(
        {greeting: `Hello ${name}`}
    );
});

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
