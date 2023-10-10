const registerString = localStorage.getItem('userData');
const userArry = JSON.parse(registerString);
// console.log(userArry);
const form = document.querySelector('#form');
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const error = document.querySelector('.alert')
for (let i = 0; i < userArry.length; i++) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        if (email.value === userArry[i].Email && password.value === userArry[i].Password) {
            window.location = "./index.html"

        } else {
            error.innerHTML = 'email or password inncorrect?'
        }
    })
}
