
const button = document.querySelector('.button')
const password = document.getElementById('password').addEventListener('keyup', function () {
    let senha = document.getElementById('password').value
    const validacao = document.querySelector('.valida')
    if (validatePassword(senha)) {
        validacao.innerHTML = 'Senha Valida!'
        validacao.style.color = 'green'
        validacao.style.textAlign = 'center'

    } else if (!validatePassword(senha)) {
        validacao.innerHTML = 'A senha deve ter pelo menos 8 caracteres, pelo menos uma letra Maiuscula e conter pelo menos um caractere especial.'
        validacao.style.color = 'red'
        validacao.style.textAlign = 'center'
    }

})

button.addEventListener('click', async () => {

    //Validando os campos de entradas
    const validacao = document.querySelector('.valida')
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('Confirm_password').value;


    if (user === '' || password === '' || confirmPassword === '') {
        alert('Por Favor Preencha Todos Os campos Obrigatorios');
    } else if (confirmPassword != password) {
        validacao.innerHTML = ' As senhas não conferem!'
        validacao.style.color = 'red'
        validacao.style.textAlign = 'center'
    } else {
        await fetch('/cadastro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user, password })
        })
    }

}
)



//Função de validação de senha
function validatePassword(password) {
    const re = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}