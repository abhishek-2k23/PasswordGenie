import express from 'express';
const app = express();
app.listen(5500, () => {
    console.log("server is up at 5500")
})

app.get('/', (_,res) => {
    res.send('welcome')
})