import express from express
import dotenv from 'dotenv'

dotenv.config({
    path: "./config.env"
})

// start the server

const app = express()
const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log(`Awesome, Our application server is running on http://locahost:${PORT}`);
})


