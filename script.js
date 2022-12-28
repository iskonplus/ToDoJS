const buttunLog = document.querySelectorAll(".wrapper_buttun_log");
const articleGreetings = document.querySelectorAll(".article_greetings");
const registrationOrLogIn = document.querySelectorAll(".registration_or_logIn");
const wrapperInputLogName = document.querySelectorAll(".wrapper_input_log.name");
const buttonSubmitForm = document.querySelectorAll(".button.submit");
const buttonLoginForm = document.querySelectorAll(".button.login");
const form = document.querySelectorAll("form");


buttunLog.forEach(el => el.addEventListener("click", (event) => {
    openRegistrationOrLoginPage(event);
}));

function openRegistrationOrLoginPage(ev) {
    articleGreetings[0].classList = 'article_greetings'
    registrationOrLogIn[0].classList = 'registration_or_logIn active'
    
    if (ev.target.value === 'Login') {
        wrapperInputLogName[0].classList = 'wrapper_input_log name'
        buttonSubmitForm[0].classList = 'button submit'
        buttonLoginForm[0].classList = 'button login active'
    } else if(ev.target.value==='Registration') {
        wrapperInputLogName[0].classList = 'wrapper_input_log name active'
        buttonSubmitForm[0].classList = 'button submit active'
        buttonLoginForm[0].classList = 'button login'
    }
}


buttonSubmitForm[0].addEventListener("click", (event) => {
    event.preventDefault();
    // let arr = form[0].map(el=>el)
    console.log(form[0])
    console.log(form)
})