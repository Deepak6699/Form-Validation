document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zip').addEventListener('blur', validateZipCode);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    }else{
        name.classList.remove('is-invalid');
    }
}
function validateZipCode(){

}
function validateEmail(){

}
function validatePhone(){

}