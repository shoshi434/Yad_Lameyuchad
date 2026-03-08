require("dotenv").config()
const express=require("express")
const path=require("path")
const cors= require("cors")
const corsOptions=require("./config/corsOptions")
const connectDB=require("./config/dbConn")
const mongoose=require("mongoose")

connectDB()

const app = express()
const PORT =process.env.PORT||2500

app.use(express.json())
app.use(cors(corsOptions))
app.use(express.static("public"))

// API Routes
app.use("/api/club",require("./routs/ClubRouts"))
app.use("/api/auth",require("./routs/AuthRouts"))
app.use("/api/child",require("./routs/ChildRouts"))
app.use("/api/admin",require("./routs/AdminRouts"))
app.use("/api/daycamp",require("./routs/DayCampRouts"))
app.use("/api/messages", require("./routs/MessageRouts"))
app.use("/api/documents", require("./routs/DocumentRouts"))
app.use("/api/volunteer", require("./routs/VolunteerRouts"))
app.use("/api/update", require("./routs/UpdateRouts"))

// Serve React App in production
const clientBuildPath = path.join(__dirname, '../client/build')
console.log('Looking for client build at:', clientBuildPath)

app.use(express.static(clientBuildPath))

// Catch all other routes and return index.html
app.get('*', (req, res) => {
    const indexPath = path.join(clientBuildPath, 'index.html')
    console.log('Serving index.html from:', indexPath)
    res.sendFile(indexPath)
})

mongoose.connection.once('open',()=>{
    console.log('connected to mongoDB')
    app.listen(PORT,()=>{console.log(`server running on port ${PORT}`)})
})
mongoose.connection.on('error',err=>{
    console.log(err)
})
