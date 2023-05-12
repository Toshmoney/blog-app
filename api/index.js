const express = require("express");
const cors = require("cors");
const router = require("./routes/Handler");
const app = express();
const port = process.env.port || 1000;

// ======== Middlewares ========
app.use(cors());
app.use(express.json())
app.use("/", router)

app.listen(port, ()=>{
    console.log(`Server started successfully on port ${port}...`);
})