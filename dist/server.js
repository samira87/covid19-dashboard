(()=>{var e={358:e=>{"use strict";e.exports=require("cookie-parser")},682:e=>{"use strict";e.exports=require("debug")},127:e=>{"use strict";e.exports=require("express")},605:e=>{"use strict";e.exports=require("http")},150:e=>{"use strict";e.exports=require("morgan")},622:e=>{"use strict";e.exports=require("path")}},r={};function s(t){if(r[t])return r[t].exports;var i=r[t]={exports:{}};return e[t](i,i.exports,s),i.exports}(()=>{var e=s(127),r=s(622),t=s(358),i=s(150),o=r.join(__dirname,"html/index.html"),n=e();n.use(i("dev")),n.use(e.json()),n.use(e.urlencoded({extended:!1})),n.use(t()),n.use(e.static(r.join(__dirname))),n.use("/",(function(e,r){r.sendFile(o)}));var u=s(682)("covid19-dashboard:server"),a=s(605),p=function(e){var r=parseInt(e,10);return isNaN(r)?e:r>=0&&r}(process.env.PORT||"3000");n.set("port",p);var c=a.createServer(n);c.listen(p),c.on("error",(function(e){if("listen"!==e.syscall)throw e;var r="string"==typeof p?"Pipe "+p:"Port "+p;switch(e.code){case"EACCES":console.error(r+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(r+" is already in use"),process.exit(1);break;default:throw e}})),c.on("listening",(function(){var e=c.address(),r="string"==typeof e?"pipe "+e:"port "+e.port;u("Listening on "+r)}))})()})();