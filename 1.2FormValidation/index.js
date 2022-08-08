function validate(){
        var username = document.getElementById('username').value
        var email = document.getElementById('email').value
        var phone = document.getElementById('phone').value
        var password = document.getElementById('password').value
        var cpassword = document.getElementById('cpassword').value

        checkusername(username)
        checkemail(email)
        checkphone(phone)
        checkpassword(password)
        checkpassmatch(password, cpassword)
        
}
function checkusername(username){

    //check length and add function from css 
    if(username.length >5)
    {
        document.getElementById('username').classList.add('success')

        document.getElementById('username').classList.replace('error','success')
        console.log(username)
        document.getElementById('username_error').innerText=" "


    }
    else
    {
        document.getElementById('username').classList.add('error')
        document.getElementById('username_error').innerText="*Username must have atleast 6 characters"

    }
}
function  checkemail(email){
    if(email.includes('@'))
    {
        document.getElementById('email').classList.add('success')

        document.getElementById('email').classList.replace('error','success')
        console.log(email)
        document.getElementById('email_error').innerText=" "

    }
    else
    {
        document.getElementById('email').classList.add('error')
        document.getElementById('email_error').innerText="*Enter a valid email id"

    }
}
function  checkphone(phone){
    if(phone.length ==10)
    {
        document.getElementById('phone').classList.add('success')

        document.getElementById('phone').classList.replace('error','success')
        console.log(phone)
        document.getElementById('phone_error').innerText=" "

    }
    else
    {
        document.getElementById('phone').classList.add('error')
        document.getElementById('phone_error').innerText="*enter valid phone number"

    }
}
function checkpassword(password){
    if(password.length > 8)
    {
        document.getElementById('password').classList.add('success')

        document.getElementById('password').classList.replace('error','success')
      //  console.log(username)
        document.getElementById('password_error').innerText=" "

    }
    else
    {
        document.getElementById('password').classList.add('error')
        document.getElementById('password_error').innerText="*password must be of atleast 9 characters"

    }

}
function checkpassmatch(password, cpassword){
    if(password==cpassword && cpassword!=0)
    {
        document.getElementById('cpassword').classList.add('success')

        document.getElementById('cpassword').classList.replace('error','success')
        //console.log(pass)
        document.getElementById('cpassword_error').innerText=" "

    }
    else
    {
        document.getElementById('cpassword').classList.add('error')
        document.getElementById('cpassword_error').innerText="*passwords do not match"

    }

}