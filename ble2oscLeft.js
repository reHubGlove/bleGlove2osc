//var BlendMicro = require("blendmicro");

var BlendMicro = require("./node_modules/blendmicro");
var osc = require('node-osc');

var name = ( !process.argv[2] ) ? 'LeftGlove':process.argv[2];
var bm = new BlendMicro(name);
var client = new osc.Client('127.0.0.1', 12000);

/**********************************************************/

  var pitch     = 0;
  var roll      = 0;
  var yow       = 0;

  var thumb     = 0;
  var thumbrot  = 0;
  var index     = 0;
  var middle    = 0;
  var ring      = 0;
  var little    = 0;

  var thumbpad  = 0;
  var indexpad  = 0;
  var middlepad = 0;
  var ringpad   = 0;
  var littlepad = 0;

/**********************************************************/

bm.on("open", function(){
  console.log("open");
});

bm.on("data", function(data){
   pitch     = (isNaN(data[1])) ? 0:data[1];
   roll      = (isNaN(data[2])) ? 0:data[2];
   yow       = (isNaN(data[3])) ? 0:data[3];

   thumb     = (isNaN(data[4])) ? 0:data[4];
   thumbrot  = (isNaN(data[5])) ? 0:data[5];
   index     = (isNaN(data[6])) ? 0:data[6];
   middle    = (isNaN(data[7])) ? 0:data[7];
   ring      = (isNaN(data[8])) ? 0:data[8];
   little    = (isNaN(data[9])) ? 0:data[9];

   thumbpad  = (isNaN(data[10])) ? 0:data[10];
   indexpad  = (isNaN(data[11])) ? 0:data[11];
   middlepad = (isNaN(data[12])) ? 0:data[12];
   ringpad   = (isNaN(data[13])) ? 0:data[13];
   littlepad = (isNaN(data[14])) ? 0:data[14];

  console.log(data[0].toString()+": "+pitch+","+roll+","+yow+","+thumb+","+thumbrot+","+index+","+middle+","+ring+","+little+","+thumbpad+","+indexpad+","+middlepad+","+ringpad+","+littlepad);
  
  if ( data[0] == 108 ) {
  	client.send('/leftGlove', [pitch,roll,yow,thumb,thumbrot,index,middle,ring,little,thumbpad,indexpad,middlepad,ringpad,littlepad], function () { });
  }
  if ( data[0] == 114 ) {
  	client.send('/rightGlove', [pitch,roll,yow,thumb,thumbrot,index,middle,ring,little,thumbpad,indexpad,middlepad,ringpad,littlepad], function () { });
  }
  
});

bm.on("close", function(){
  client.kill();
});
