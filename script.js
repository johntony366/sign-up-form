const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const phoneNumber = document.querySelector('#phoneNumber')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')

email.addEventListener('input', (e) => {
    if (email.validity.typeMismatch) {
        email.reportValidity();
    }
})

confirmPassword.addEventListener('input', (e) => {
    if (confirmPassword.value != password.value) {
        confirmPassword.setCustomValidity("Passwords do not match")
        password.setCustomValidity("Passwords do not match")
        confirmPassword.reportValidity();
    }
    else {
        confirmPassword.setCustomValidity("")
        password.setCustomValidity("")
    }
})