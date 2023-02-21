// var http = require("http");

// const httpServer = http.createServer(handleServer);


// function handleServer(req, res) {
  
// }
var http=require("http");
const httpServer=http.createServer(handleServer);
function handleServer(req,res){
    console.log(req.url);
    if(req.url=="/welcome"){
        res.writehead(200,{'content-tpye':Text,'keep-alive':100})
         res.end('Welcome to Dominos')          
        }
        else if (req.url=='/contact'){
            res.writehead(200,{'content-type':'json','keep-alive':100})
            res.end(
                JSON.stringify({
                    phone: '18602100000', 
                    email: 'guestcaredominos@jublfood.com' 
                }
            
            ));
         }
          else{
            res.writehead(404,{'content-type':"html",'keep-alive':100})
            res.writehead(<h1> 404: Page not found</h1>);
            res.end()
          }
        }
        httpServer.listen(8081,()=>{console.log('server port no 8081');})


















module.exports = httpServer;