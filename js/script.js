function validateform()
        {
            var Name=document.querySelector('#name').value;
            var Email=document.querySelector('#email').value;
            var Password = document.querySelector('#password').value;
            var ConfirmPassword = document.querySelector('#confirmpassword').value;
            var Phone = document.querySelector('#phone').value;
            var ErrorMessage = document.querySelector('#ErrMsg');

        ErrorMessage.innerHTML="";

        if(Name===""){
            ErrorMessage.innerHTML=`<i class="material-icons" style="position:relative;top:6px;">&#xe001;</i> Please Enter Your Name`;
            return false;
        }
        if(Email==="")
        {
            ErrorMessage.innerHTML=`<i class="material-icons" style="position:relative;top:6px;">&#xe001;</i> Please Enter Your Email`;
            return false;
        }
        var email_format = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(!email_format.test(Email))
        {
            ErrorMessage.innerHTML=`<i class="material-icons" style="position:relative;top:6px;">&#xe001;</i> Please enter Your vaild email`;
            return false;
        }
        if(Password===""){
            ErrorMessage.innerHTML=`<i class="material-icons" style="position:relative;top:6px;">&#xe001;</i> Please Enter Your Password`;
            return false;
        }
        var password_format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/; 
        if(!password_format.test(Password)){
            ErrorMessage.innerHTML=`<i class="material-icons" style="position:relative;top:6px;">&#xe001;</i>  Your Password must Contain 8 to 15 characters long, and consists of uppercase letters, lowercase letters, digits, or the special characters`;
            return false;
        }
        
        if(ConfirmPassword===""){
            ErrorMessage.innerHTML=`<i class="material-icons" style="position:relative;top:6px;">&#xe001;</i> Please Enter The Password`;
            return false;
        }
        if(ConfirmPassword!=Password){
            ErrorMessage.innerHTML=`<i class="material-icons" style="position:relative;top:6px;">&#xe001;</i> Please Check The Password`;
            return false;
        }
        if(Phone===""){
            ErrorMessage.innerHTML=`<i class="material-icons" style="position:relative;top:6px;">&#xe001;</i> Please Enter Your Phone Number`;
            return false;
        }
        var phone_no_format=/^\d{10}$/;

        if(!phone_no_format.test(Phone)){
            ErrorMessage.innerHTML=`<i class="material-icons" style="position:relative;top:6px;">&#xe001;</i> Please Check Your Phone Number`;
            return false;
        }

        alert("Summitted Successfully");

        return true;
       
    }