const containerpassword = document.querySelector("#container-password");
const buttonesc = document.querySelector(".button-esc")
const buttoncta = document.querySelector(".button-cta");
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
const btnCopiar = document.querySelector(".password")



let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
}



function generatePassword() {
    let pass = ""

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerpassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}


btnCopiar.addEventListener('click', (e) => {
    function copyPassword() {
        alert("copiou")
    }
    navigator.clipboard.writeText(novaSenha)
})
