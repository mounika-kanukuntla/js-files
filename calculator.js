let x =document.getElementById('res')
function num (number){
    x.value += number
}
function op (operator)
{
    x.value += operator;
}
function clr (){
    x.value ='';
}
function del (){
    x.value = x.value.slice(0,-1);
}
function calculate(){
    x.value = eval(x.value)
}

