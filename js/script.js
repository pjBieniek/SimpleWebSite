function validateForm(){
    let name = document.contact.name.value;
    let email = document.contact.email.value;
    let comments = document.contact.comments.value;
    let nameRGX = /^[A-Z]{1}[a-z]{1,9}\s[A-Z]{1}[a-z]{1,9}$/;
    let emailRGX = /^.{1,10}@.{1,10}\..{1,10}$/

    var nameResult = nameRGX.test(name);
    var emailResult = emailRGX.test(email);

    if (nameResult == false){
        alert('first or last name no longer than 10 letters, should start with Upper case')
        return false;
    } else if (emailResult == false){
        alert('Invailid email')
        return false;
    } else {
        return true;
    }
}