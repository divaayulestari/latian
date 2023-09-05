const inputPassword = document.getElementById("input-password");
const erorMessage = document.getElementById("eror-message");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
    const password = inputPassword.value;

    if(password.length >= 7){
        erorMessage.textContent = password ;
        erorMessage.style.color = "blue" ;

    } else {
        erorMessage.textContent = "Password Terlalu Pendek";
        erorMessage.style.color = "red";
    }
});