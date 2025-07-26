"use strict";
const picture = document.getElementById("picture");
const error = document.getElementById("error");
const inputEmail = document.getElementById("input");
const form = document.getElementById("form");
const updatePicture = () => {
    if (!picture)
        return;
    if (window.innerWidth < 768)
        picture.src = "./assets/images/illustration-sign-up-mobile.svg";
    if (window.innerWidth >= 768)
        picture.src = "./assets/images/illustration-sign-up-tablet.svg";
    if (window.innerWidth >= 1024)
        picture.src = "./assets/images/illustration-sign-up-desktop.svg";
};
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isEmailOk(e) {
    e.preventDefault();
    if (!inputEmail)
        return;
    try {
        const emailCorrect = isValidEmail(inputEmail.value);
        if (!emailCorrect) {
            throw new Error("Email incorrect!");
        }
        visualizeCorrect();
        // Save in database
        form === null || form === void 0 ? void 0 : form.submit();
        console.log("Email valid:", inputEmail.value);
    }
    catch (error) {
        visualizeError();
    }
}
function visualizeCorrect() {
    if (error)
        error.style.display = "none";
    inputEmail === null || inputEmail === void 0 ? void 0 : inputEmail.classList.remove("stay__input--error");
}
function visualizeError() {
    if (error)
        error.style.display = "block";
    if (inputEmail)
        inputEmail.classList.add("stay__input--error");
}
window.addEventListener('DOMContentLoaded', updatePicture);
window.addEventListener('resize', updatePicture);
form === null || form === void 0 ? void 0 : form.addEventListener("submit", isEmailOk);
console.log("hola");
