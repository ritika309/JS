var navstatus = 0;
function openav()
{
    //bar not open
    if (!navstatus){
        $('.maindiv').css('width','100%')
        $('li').css('display','block')
        navstatus=1
    }
    //if bar open
    else{
        $('.maindiv').css('width','0%')
        $('li').css('display','none')
        navstatus=0 

    }
}