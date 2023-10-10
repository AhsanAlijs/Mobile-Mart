const userName = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginForm = document.querySelector('#form'); // Assuming 'login-form' is the ID of your form

const userArry = []

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // userArry.push(`Email:${email.value}password:${password.value}`)
    const userObj = {
        UserName: userName.value,
        Email: email.value,
        Password: password.value
    };
    userName.value = ''
    email.value = ''
    password.value = ''

    userArry.push(userObj);
    console.log(userArry);
    localStorage.setItem('userData', JSON.stringify(userArry));
});



