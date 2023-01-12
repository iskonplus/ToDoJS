const buttunLog = document.querySelectorAll(".wrapper_buttun_log");
const articleGreetings = document.querySelectorAll(".article_greetings");
const registrationOrLogIn = document.querySelectorAll(".registration_or_logIn");
const wrapperInputLogName = document.querySelectorAll(".wrapper_input_log.name");
const buttonSend = document.querySelectorAll(".wrapper_input_log.button");
const buttonLoginForm = document.querySelectorAll(".button.login");
const buttonSubmitForm = document.querySelectorAll(".button.submit");
const natification = document.querySelector(".natification");
const form = document.getElementById("form");


buttunLog.forEach(el => el.addEventListener("click", (event) => {
    openRegistrationOrLoginPage(event.target.value);
}));

function openRegistrationOrLoginPage(target) {
    articleGreetings[0].classList.remove("active");
    registrationOrLogIn[0].classList.add("active");

    if ( target === 'Login') {
        wrapperInputLogName[0].classList.remove("active");
        buttonSubmitForm[0].classList.remove("active");
        buttonLoginForm[0].classList.add("active");
    } else if (target === 'Registration') {
        wrapperInputLogName[0].classList.add("active");
        buttonSubmitForm[0].classList.add("active");
        buttonLoginForm[0].classList.remove("active");
    }
}

// ----------------------get user data login----------------------------

buttonSend.forEach(el => el.addEventListener("click", (event) => getUserDataForm(event)));

function getUserDataForm(e) {
    e.preventDefault();
    const user = [...form].reduce((acc, el) => {
        if (el.name === "name" || el.name === "email" || el.name === "password") {
            acc[el.name] = el.value;
        }
        return acc;
    }, {});

    [...form].forEach(el => el.value = "");
    
    e.target.className === "button submit active" ?
        saveUserRegistrationData(user) :
        cheackUserLoginData(user);

}

function saveUserRegistrationData(user) {
    let theSameUser = false;
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify([user]));
        openRegistrationOrLoginPage('Login');
    } else {
        const usersDataLocalStorage = JSON.parse(localStorage.getItem('users'));
        usersDataLocalStorage.forEach(el => {
            if (el.email === user.email) {
                theSameUser = true;
            }
            
        });

        if (theSameUser === false) {
            console.log(theSameUser);
            localStorage.setItem('users', JSON.stringify([user, ...usersDataLocalStorage]));
            openRegistrationOrLoginPage('Login');
        } else {
            natification.classList.value === 'natification'&&
            openNatification("Such user already exists");
        }
    }

}


function cheackUserLoginData(user) {
    console.log(user);

}

function openNatification(message) {
    natification.innerHTML = '<h2>'+ message +'</h2>';
    natification.classList.toggle("active");
    setTimeout(() => {
        natification.classList.toggle("active");
    }, 3500);
}