function validateForm(){
    let name = document.contact.name.value;
    let email = document.contact.email.value;
    let comments = document.contact.comments.value;

    if (name=="" || email==""){
        alert("You cant send blank form");
        return false;
    } else if (name=="Jan"){
        alert("Good");
        return false;
    }
}