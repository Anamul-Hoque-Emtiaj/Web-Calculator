document.querySelector("#mood").addEventListener("click",function(){
    alert("Calculator is going to be changed into Mood-2");
});
var a = "";
var b = "";
var c = "";
var ans = "";
var lenNum = document.querySelectorAll(".number").length;
var lenOpr = document.querySelectorAll(".operator").length;
function getHis(){
    return document.querySelector("#history").innerText;
}
function printHis(y){
    document.querySelector("#history").innerText = y;
}
function getRes(){
    return document.querySelector("#result").innerText;
}
function printRes(y){
    document.querySelector("#result").innerText = "="+y;
}
for(var i=0;i<lenNum;i++){
    document.querySelectorAll(".number")[i].addEventListener("click",function(){
        var v = this.innerHTML;
        printHis(getHis()+v);
        printRes(eval(getHis()));
    });
}
for(var i=0;i<lenOpr;i++){
    document.querySelectorAll(".operator")[i].addEventListener("click",function(){
        var v = this.innerHTML;
        if(v=="="){
            printRes(eval(getHis()));
            printHis("");
        }
        else if(v=="AC"){
            printHis("");
            document.querySelector("#result").innerText = "";
        }
        else if(v=="CE"){
            var x = getHis();
            if(x.length>1){
                x = x.substring(0,x.length-1);
                printHis(x);
                 printRes(eval(getHis()));
            }
            else{
                printHis("");
                document.querySelector("#result").innerText = "";
            }
           
        }
        else printHis(getHis()+v);
   
    });
    
}
