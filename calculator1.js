document.querySelector("#mood").addEventListener("click",function(){
    alert("Calculator is going to be changed into Mood-1");
});
function get(){
    return document.querySelector("#txtbx").value;
}
function print(y){
    document.querySelector("#txtbx").value = y;
}
var y=0;
function insert(x){
    if(x=="clr") {
        print("");
    }
    else if(x=="pi"){
        var a = Number(get());
        var s = a+"^2" + " = " + a*a;
        print(s);
        y=1;
    }
    else if(x=="ce"){
        var r = get();
        if(r){
            r = r.substring(0,r.length-1);
            print(r);
        }
    }
    else if(x=="sin"){
        var r = Math.sin(Number(get())*(Math.PI/180));
        var s = "sin"+Number(get())+" = "+r.toFixed(3);
        print(s);
        y=1
    }
    else if(x=="cos"){
        var r = Math.cos(Number(get())*(Math.PI/180));
        var s = "cos"+Number(get())+" = "+r.toFixed(3);
        print(s);
        y=1
    }
    else if(x=="tan"){
        var r = Math.tan(Number(get())*(Math.PI/180));
        var s = "tan"+Number(get())+" = "+r.toFixed(3);
        print(s);
        y=1
    }
    else if(x=="log"){
        var r = Math.log10(Number(get()));
        var s = "log"+Number(get())+" = "+r.toFixed(3);
        print(s);
        y=1
    }
    else if(x=="rt"){
        var r = Math.sqrt(Number(get()));
        var s = "√"+Number(get())+" = "+r.toFixed(3);
        print(s);
        y=1
    }
    else{
        if(y==0){
            print(get()+x);
        }
        else{
            print(x);
            y=0;
        }
    }
}