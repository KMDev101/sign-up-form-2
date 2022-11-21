
var signUpBg = document.querySelector(".sign-up-bg");

var cta = document.querySelector(".cta");
var leftText = document.querySelector(".left-text");
var rightForm = document.querySelector(".right-form-content");

cta.addEventListener("click", () => {

    signUpBg.classList.toggle("animation");
    cta.classList.toggle("animation");
    leftText.classList.toggle("animation");
    rightForm.classList.toggle("animation");

});