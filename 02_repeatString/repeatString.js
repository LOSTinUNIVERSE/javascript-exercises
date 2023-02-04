const repeatString = function(string, num){
 let store =''
  for (let i = 0; i < num ; i++){ 
    store += string
  }
  if ( num < 0 ) {
    store = "ERROR"
  }
 return store
} 
repeatString ('', 10)
// how do we add string to string ?

// Do not edit below this line
module.exports = repeatString;
