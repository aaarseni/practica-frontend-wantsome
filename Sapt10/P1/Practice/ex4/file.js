const input = document.querySelectorAll('.required');
const form = document.querySelector('form');
const submit = document.querySelector('#submit')
let theDiv = []

for (let i = 0; i < input.length; i++) {
    theDiv = document.createElement('div');
    theDiv.style = 'width: 70%; font-size:20px; height: 25px; color:black, bold; backGround : rgba(255, 0, 0, .2); border : thin solid rgba(255, 0, 0, .7)'
    let parentDiv = input[i].parentNode;
    parentDiv.insertBefore(theDiv, input[i]);
    theDiv.style.display = 'none';
}



const userName = document.querySelector('#userName')
const userNameFormat = /^[0-9a-zA-Z]+$/;
const reqUserName = () => {
    if (userNameFormat.test(userName.value) === false || userName.value.length < 4 ) {
        userName.previousElementSibling.style.display = 'inline-block'
        userName.previousElementSibling.textContent = 'Please enter a username!'
    } else {
        userName.previousElementSibling.style.display = 'none'
    }
}

const email = document.querySelector('#email')
const reqEmail = () => {
    emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailFormat.test(email.value) === false) {
        email.previousElementSibling.style.display = 'inline-block';
        email.previousElementSibling.textContent = 'Please enter a valid email adress!'

    } else {
        return email.previousElementSibling.style.display = 'none';
    }
}

const fullName = document.querySelector('#fullName');
const reqFullName = () => {
    if (userNameFormat.test(fullName.value) === false || fullName.value.length < 1) {
        fullName.previousElementSibling.style.display = 'inline-block'
        fullName.previousElementSibling.textContent = 'Please enter your first name!'
    } else {
        fullName.previousElementSibling.style.display = 'none'
    }
}

const nickName = document.querySelector('#nickName');
const reqNickName = () => {
    if (userNameFormat.test(nickName.value) === false || nickName.value.length < 1 ) {
        nickName.previousElementSibling.style.display = 'inline-block'
        nickName.previousElementSibling.textContent = 'Please enter your last name!'
    } else {
        nickName.previousElementSibling.style.display = 'none'
    }
}

const phone = document.querySelector('#phoneNumber');
const reqPhone = () => {
    if (phone.value.length < 10) {
        phone.previousElementSibling.style.display = 'inline-block'
        phone.previousElementSibling.textContent = 'Please enter your phone number!'
    } else {
        phone.previousElementSibling.style.display = 'none'
    }
}

const submitFn = (event) => {
    if (userNameFormat.test(userName.value) === false || userName.value.length < 4) {
        event.preventDefault();
    } else if (emailFormat.test(email.value)===false) {
        event.preventDefault();
    } else if (fullName.value.length < 1) {
        event.preventDefault();
    } else if (nickName.value.length < 1) {
        event.preventDefault();
    } else if (phone.value.length < 10) {
        event.preventDefault();
    }
}

form.addEventListener('input', reqUserName)
form.addEventListener('input', reqEmail)
form.addEventListener('input', reqFullName)
form.addEventListener('input', reqNickName)
form.addEventListener('input', reqPhone)
form.addEventListener('click', submitFn)