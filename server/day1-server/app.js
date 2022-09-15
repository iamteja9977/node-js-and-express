// import http from "http";
// // console.log(http)
// const port=5000;
// const server=http.createServer((req,res)=>{
// // res.send("this is a simple http server");//throwing error
// res.end("this is a simple http server");
// })
// server.listen(port,()=>{
//     console.log("server started at port ", port);
// })

// import http from "http";
// // console.log(http)
// const port=5000;
// const server=http.createServer((req,res)=>{

// res.end("this is a simple http server");
// })
// server.listen(port,()=>{
//     console.log("server started at port ", port);
// })

import http from "http";
// console.log(http)
const port=5000;
const server=http.createServer((req,res)=>{
console.log(req.headers);
// console.log(req.body); //undefined

res.end("this is a simple http server");

})
server.listen(port,()=>{
    console.log("server started at port ", port);
})