var http=require('http');
var url=require('url');
//http.createServer(function(request,response)
//{
//    response.setHeader("Content-Type","application/json");
//         response.end("end");
//                  
//                  }).listen(8000, '127.0.0.1');

http.createServer((request,response) =>
{
    var pathname = url.parse(request.url).pathname;
 if(pathname=='/user')
{
    response.end("{'name':'sakshi','userid':'123'}");
}
else if(pathname=='/order')
    {
        response.end("{'id':'1','item':'2'}");
    }

 }).listen(8000);