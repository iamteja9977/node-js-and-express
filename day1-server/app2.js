import http from "http";
import url from "url";
import {StringDecoder} from "string_decoder";

const port=5000;
const server=http.createServer((req,res)=>{
console.log(req.headers);

//get the url and parse it
const parsedURL=url.parse(req.url,true);
console.log(parsedURL)

const path=parsedURL.path;
const trimmedpath=path.split('/').filter((ele) =>ele !="").join("/");
console.log(trimmedpath);

const method=req.mothed;
console.log(method);

const queryObjects=parsedURL.query;
console.log(queryObjects)


//get headers
console.log(req.headers)
const decoder=new StringDecoder('utf-8');
console.log(decoder)

let bodybuffer="";
req.on('data',(data)=>{
    bodybuffer+=decoder.write(data);
})
req.on('end',()=>{
    bodybuffer+=decoder.end();
    console.log(bodybuffer)
    res.end("check the server console")
})

res.end("this is a simple http server");

})
server.listen(port,()=>{
    console.log("server started at port ", port);
})