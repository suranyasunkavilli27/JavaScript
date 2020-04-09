// Anonymus functions
var add = function(a,b){ 
    console.log("This is anonymous");
};
add(6,7);
//global function
setTimeout(add, 9000);
setTimeout(function(){console.log("hi in timeout")}, 3000);
// self invoking functions
(function(a,b){
    console.log(a + b);
    return a + b;
})(2,8);