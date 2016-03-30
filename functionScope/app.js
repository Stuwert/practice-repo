// var objecty = {
//   "sam" : "adams",
//   "george" : "washington",
//   "thomas" : "jefferson"
// }

var objecty = ["sam", "george", "thomas"]

for(var i in objecty){
  callBackTest(function(){
    console.log(objecty[i]);
  })
}


function callBackTest(callback){
  callback();
}
