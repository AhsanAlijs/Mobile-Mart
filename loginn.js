const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginForm = document.querySelector('#login-form'); // Assuming 'login-form' is the ID of your form

const userArry = []

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // userArry.push(`Email:${email.value}password:${password.value}`)
    const userObj ={
        Email: email.value,
        Password: password.value
    };
    email.value=''
    password.value=''
    userArry.push(userObj);

    // console.log(userArry);
    window.location = "./index.html";
    localStorage.setItem('userData', JSON.stringify(userArry));
});



