var value;
var result;
function button(num){
    value = document.calc.viewfinder.value += num;
}
function reset(){
    value = document.calc.viewfinder.value = '';
}
function calculate(){
    result = eval(value);
    document.calc.viewfinder.value = result.toLocaleString('pt-br');
}