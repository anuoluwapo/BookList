$(document).ready(function(){
    $('a.skip').click(function(){
        $('#carousel-example-1z').slideUp('slow');
        $('section#login').toggleClass('hide');
    });
    $("form").submit(function(event){
        event.preventDefault();
        validateForm();
        $('section#myBooList').toggleClass('hide');
        $('section#login').toggleClass('hide');
      });        
});
function validateForm(){
    var email = document.getElementById('materialLoginFormEmail').value;
    if (email == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var password = document.getElementById('materialLoginFormPassword').value;
    if(password == ""){
        document.getElementById('status').innerHTML = "Password cannot be empty";
        return false;
    }
    var passwordRetype = document.getElementById('materialLoginFormPasswordrtp').value;
    if(passwordRetype == ""){
        document.getElementById('status').innerHTML = "Retype password cannot be empty";
        return false;
    }
    else {
        if(password !== passwordRetype){
            document.getElementById('status').innerHTML = "Your password did not matched!";
            return false;
        }  
    }
    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('status').style.color = 'green';
  }
  