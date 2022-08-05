// 1. we create question and option data
//create an array with question, 4 options , and correct answer
 
var quizdata = [

    { ques:"1which framework is related to Js",
        a:'.net',
        b:'flask',
        c:'django',
        d:'react',
        correct:'a'

    },
    
    {
        ques:"2which framework is related to Js",
        a:'.net',
        b:'flask',
        c:'django',
        d:'react',
        correct:'b'

    },
    
    {
        ques:"3which framework is related to Js",
        a:'.net',
        b:'flask',
        c:'django',
        d:'react',
        correct:'c'
    },
    
    {
        ques:"4which framework is related to Js",
        a:'.net',
        b:'flask',
        c:'django',
        d:'react',
        correct:'d'
    },

]


var quiz= document.getElementById('quizdiv')
var answer = document.querySelectorAll('.answer')
var ques= document.getElementById('ques')
var option_a= document.getElementById('aval')
var option_b= document.getElementById('bval')
var option_c= document.getElementById('cval')
var option_d= document.getElementById('dval')
var submitbtn= document.getElementById('submit')


var currentQuestion= 0
var score=0

loadquiz()

function loadquiz(){
    
    deselect()
    ques.innerHTML = quizdata[currentQuestion].ques
    option_a.innerText = quizdata[currentQuestion].a
    option_b.innertext= quizdata[currentQuestion].b
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText= quizdata[currentQuestion].d
    

}

function deselect(){
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click',()=>{
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption=answer.id
        }
    })
    if (selectedoption==quizdata[currentQuestion].correct)
    {
        score+=1
    }
    currentQuestion+=1
    if(currentQuestion==quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML = `<h3> You have answered ${score} / ${quizdata.length} correctly</h3`
    }
    else
        loadquiz()
})