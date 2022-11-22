let contador = 0
let clicks = 0

function Adicionar(valor) {
    debugger
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
    debugger
    let campo_calculo = document.getElementById('numero-calculo').textContent
    
    if (campo_calculo) {
        document.getElementById('numero-resultado').innerText = eval(campo_calculo)
    } else {
        document.getElementById('numero-resultado').innerText = 'Error'
    }
}