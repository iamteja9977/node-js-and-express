import express from "express";


//Instantiate Express 
const app = express();

//Allot Port Number
const port = 5050;

//Checks if the Body is Coming in Valid JSON Format
app.use(express.json());


//GET Method
app.get("/", (req, res) => {
    console.log("I am in Express Server");
    // console.log(req.body)//never use re.body in get , do only in post
    //Send Response to the Server
    // setTimeout(() => {
    //     res.send("<h1>Hi From Express Server GET METHOD</h1>");
    // }, 4000);
    res.send("<h1>Hi From Express Server GET METHOD</h1>");


    //Note you cannot have more than 1 Res.send 
})
app.post("/home/api", (req, res) => {
    res.send("I am in HOME API");
})

// app.post("/home/api", async (req, res) => {
//     try {
//         let data = req.body;
//         await fs.writeFile("data.json", JSON.stringify(data));
//         res.status(200).json({ error: "File Has Been Written" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// })

//POST Method
app.post("/home/:id", (req, res) => {
    console.log(req.body)
    console.log(req.headers)
    console.log(req.query);
    console.log(req.params);
    console.log(req.method)
    console.log(req.url);
    res.send("I am coming from POST Method");
})

// app.post("/thirupathi", (req, res) => {
//     console.log(req.body)
//     console.log(req.headers)
//     console.log(req.query);
//     console.log(req.params);
//     console.log(req.method)
//     console.log(req.url);
//     res.send("I am coming from POST Method from thirupathi");
// })

//Use - Works on all HTTP Req Methods
app.use("/", (req, res) => {
    console.log(req.method);
    res.send("Welcome to Express")
})



//Listen to the Request
app.listen(port, () => {
    console.log("Server Started at Port ", port);
})