let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");


function ValidateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
      nameError.innerHTML = 'Name is required';
      return false; 
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
      nameError.innerHTML = 'Valid'; 
      return true;
}

function validatePhone(){

    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone No is Required';
        return false;
    }               
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone No Should be 10 digits';
        return false;
    }
    if(!phone.match (/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits';
        return false;
    }

    phoneError.innerHTML = 'Valid';
    return true;
}

function validateEmail(){
      var email = document.getElementById('contact-email').value;
      
      if(email.length == 0){
        emailError.innerHTML = 'Email is Required';
        return false;
      }

      if(!email.match(/^[A-Za-z\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
      }

      emailError.innerHTML = 'valid';
      return true;
}

function validateMessage(){
      var message = document.getElementById('contact-message').value;
      var required = 30;
      var left = required - message.length;

      if(left > 0){
      messageError.innerHTML = left + ' more characters required';
      return false;
      }

      messageError.innerHTML = 'valid';
      return true;      
}


function validateForm(){
    if(!ValidateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        submitError.innerHTML = 'Please fix Error to Submit';
        return false;
    }
}   