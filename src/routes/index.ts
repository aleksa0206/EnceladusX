const express = require('express'); 
const app = express();
const PORT = 6969;

const firstRoutes = require("./routes/firstRoutes")
const secondRoutes = require("./routes/secondRoutes");

app.use('/user',firstRoutes)
app.use('/comments',secondRoutes)

app.listen(PORT, () => { 
    console.log("Server Runing");
})

