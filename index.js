const express = require('express');
const app = express();
const port = 3001;

app.get('/',(req,res) => {
    console.log(req.body);
})

app.listen(port,() => {
    console.log(`Online shopping app listening on port ${port}`);
});
