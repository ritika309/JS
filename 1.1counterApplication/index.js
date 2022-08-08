function increment(){
    var number =Number( document.getElementById('count').innerHTML)
    document.getElementById('count').innerHTML= number+1
}
function decrement(){
    var number =Number( document.getElementById('count').innerHTML)
    document.getElementById('count').innerHTML= number-1
}
function reset(){
    var number =Number( document.getElementById('count').innerHTML)
    document.getElementById('count').innerHTML= 0
}