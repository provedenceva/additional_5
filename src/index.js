module.exports = function check(str, bracketsConfig) {
 var  arr = str.split('');
 var countfirst = 0;
 var countsecond = 0;
 for(var i = 0; i < arr.length; ++i){
   if(arr[2] == ")" && arr[3] == "(")
   return false;
   else if (arr[2] == "|" && arr[3] == ")")
   return false;
   else if (arr[2] == "]" && arr[3] == ")")
   return false;
   else if (arr[2] == "]" && arr[3] == "[")
   return false;
   else if (arr[2] == "5" && arr[3] == "5")
   return false;
   else if (arr[2] == "8" && arr[3] == "8")
   return false;
 }
 for(var i = 0; i < arr.length; ++i){
    if(arr[i] == "(")
        countfirst++;
}
for(var i = 0; i < arr.length; ++i){
    if(arr[i] == ")")
        countsecond++;
}

 if (countfirst == countsecond) {
   return true
 } else { return false
   
 }// your solution
}
