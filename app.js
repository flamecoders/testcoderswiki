const express = require("express");
const app = express();

app.get('*', (req, res) => {
    res.status(200).send("Okk!!")
});


app.listen(3000, () => {
    console.log("visit: http://127.0.0.1:3000")
})