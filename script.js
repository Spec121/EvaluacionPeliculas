const containerGeneral = document.getElementById("container");
const buttonLogin = document.getElementById("login__button");
const buttonRegister = document.getElementById("register__button");
const registroInformacion = document.getElementById("registroContainer");
const containerLogin = document.getElementById("container__inputs__login");
const conatainerRegister = document.getElementById("container__inputs__register");


buttonRegister.addEventListener("click", () => {
    containerGeneral.classList.add("active");
    registroInformacion.style.display = "none";
    conatainerRegister.style.zIndex = 1;
    containerLogin.style.zIndex = -1;
    conatainerRegister.classList.add("animacion");
})

buttonLogin.addEventListener("click", () => {
    containerGeneral.classList.remove("active");
    registroInformacion.style.display = "flex";
    containerGeneral.classList.add("adicional");
    conatainerRegister.style.zIndex = -1;
    containerLogin.style.zIndex = 1;
    containerLogin.style.transition = "0.6s ease";
})

