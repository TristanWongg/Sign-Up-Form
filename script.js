document.getElementById('user_password');
document.getElementById('password_confirm');

function confirmPassword(){
    if (document.getElementById('user_password').value === "" && document.getElementById('password_confirm').value === ""){
        document.getElementById('msg').innerHTML = '';
        document.getElementById('user_password').style.borderColor = '#E5E7EB';
        document.getElementById('password_confirm').style.borderColor = '#E5E7EB';
    }

    else if(document.getElementById('user_password').value === document.getElementById('password_confirm').value) {
        document.getElementById('user_password').style.borderColor = 'green';
        document.getElementById('password_confirm').style.borderColor = 'green';
        document.getElementById('msg').innerHTML = '';
    }
    else{
        document.getElementById('user_password').style.borderColor = 'red';
        document.getElementById('password_confirm').style.borderColor = 'red';
        document.getElementById('msg').innerHTML = 'Passwords do not match';
        document.getElementById('msg').style.fontSize = '14px';
    }
}