let contador = 0
let clicks = 0
let animation = 0

function Adicionar(valor) {
    
    let campo_calculo = document.getElementById('numero-calculo').textContent
    document.getElementById('numero-calculo').innerText = campo_calculo + valor
    contador = 0
}

function Operadores(operador) {
    contador = contador + 1
    if (contador < 2){
        let campo_calculo = document.getElementById('numero-calculo').textContent
        document.getElementById('numero-calculo').innerText = campo_calculo + operador
    } else {
        document.getElementById('numero-resultado').innerText = 'Error'
    }
}

function Parenteses() {
    clicks += 1

    if (clicks === 1) {
        // Abrindo parenteses
        
        let campo_calculo = document.getElementById('numero-calculo').textContent
        document.getElementById('numero-calculo').innerText = campo_calculo + '('

    } else if (clicks === 2){
        // Fechando Parenteses

        let campo_calculo = document.getElementById('numero-calculo').textContent
        document.getElementById('numero-calculo').innerText = campo_calculo + ')'

    } else {
        clicks = 0
        Parenteses()
    }
}

function Limpar() {
    document.getElementById('numero-calculo').innerText = ''
    document.getElementById('numero-resultado').innerText = ''
    contador = 0
    clicks = 0
}

function Voltar_um() {
    let campo_calculo = document.getElementById('numero-calculo').textContent
    document.getElementById('numero-calculo').innerText = campo_calculo.substring(0, campo_calculo.length - 1)
}

function Calcular() {
    
    let campo_calculo = document.getElementById('numero-calculo').textContent
    
    if (campo_calculo) {
        document.getElementById('numero-resultado').innerText = eval(campo_calculo)
    } else {
        document.getElementById('numero-resultado').innerText = 'Error'
    }
}

let ball = document.getElementById('bolinha')

function Mudar_Tema() {

    if (animation === 0){
        ball.classList.remove("bola-animacao-voltar")
        ball.classList.add("bola-animacao-ir")
        animation++

        //Invertendo cores para claro

        document.querySelector('.calculadora').style.background = '#F1F2F3'
        document.querySelector('.base').style.background = '#fff'
        document.getElementById('bolinha').style.background = '#D2D3DA'
        document.getElementById('numero-calculo').style.color = '#000000'
        document.getElementById('numero-resultado').style.color = '#000000'  
        document.getElementById('botao-c').style.background = '#D2D3DA'
        document.getElementById('botao-c').style.color = '#000'
        document.getElementById('botao-parenteses').style.background = '#D2D3DA'
        document.getElementById('botao-parenteses').style.color = '#000'
        document.getElementById('botao-porcento').style.background = '#D2D3DA'
        document.getElementById('botao-porcento').style.color = '#000'

        let letras = document.querySelectorAll('.letra')
        for (let cont = 0; cont<letras.length; cont++){
            letras[cont].style.color = '#000'
            letras[cont].style.background = '#fff'
        }
        
    } else if (animation === 1) {
        ball.classList.add("bola-animacao-voltar")
        ball.classList.remove("bola-animacao-ir")
        animation = 0

        // Invertendo cores para escuro

        document.querySelector('.calculadora').style.background = null
        document.querySelector('.base').style.background = null
        document.getElementById('bolinha').style.background = null
        document.getElementById('numero-calculo').style.color = null
        document.getElementById('numero-resultado').style.color = null
        document.getElementById('botao-c').style.background = null
        document.getElementById('botao-parenteses').style.background = null
        document.getElementById('botao-porcento').style.background = null

        let letras = document.querySelectorAll('.letra')
        for (let cont = 0; cont< letras.length; cont++){
            letras[cont].style.color = null
            letras[cont].style.background = null
        }
    }
}