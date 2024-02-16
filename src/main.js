const userName = document.querySelector('#Name')
const inputName = document.querySelector('#input-name')

const email = document.querySelector('#E-mail')
const inputEmail = document.querySelector('#input-email')

const password = document.querySelector('#Password')
const inputPassword = document.querySelector('#input-password')

const span = document.querySelector('#span')
const btn = document.querySelector('#register')

function validarEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function indexInvaled(index) {
    index.style = 'border: 2px solid #f00'
}

function indexValid(index) {
    index.style = 'border: 2px solid #f8f8f8'
}

btn.addEventListener('click', ()=>{
    userName.value == '' ? indexInvaled(inputName) : indexValid(inputName)
    email.value == '' ? indexInvaled(inputEmail) : indexValid(inputEmail)
    password.value == '' ? indexInvaled(inputPassword) : indexValid(inputPassword)

    if (userName.value == '' || email.value == '' || password.value == '') {
        span.style = 'display: block;'
        span.textContent = 'prencha os campos'
        return
    }
    else
    {
        span.style = 'display: none;'
        span.textContent = ' '
    }

    // NAME
    if (userName.value.length < 4) {
        span.style = 'display: block;'
        span.textContent = 'nome deve ter no minimo 4 caracteres'
        indexInvaled(inputName)
        return
    }
    else
    {
        indexValid(inputName)
        span.style = 'display: none;'
        span.textContent = ' '
    }

    // E-MAIL
    if (!validarEmail(email.value))
    {
        span.style = 'display: block;'
        span.innerHTML += 'email invalido'
        indexInvaled(inputEmail)
        return
    }
    else
    {
        span.style = 'display: none;'
        span.textContent = ' '
        indexValid(inputEmail)
    }

    //PASSWORD
    if (password.value.length < 8) {
        span.style = 'display: block;'
        span.textContent = 'senha deve ter 8 caracteres'
        indexInvaled(inputPassword)
    }
    else
    {
        span.style = 'display: none;'
        span.textContent = ' '
        indexValid(inputPassword)
    }
})