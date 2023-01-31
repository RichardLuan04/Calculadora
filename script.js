function Calculator() {
    return {
        display: document.getElementById("numero-calculo"),
        result: document.getElementById('numero-resultado'),
        background: document.querySelector(".calculadora"),
        buttons_top: document.querySelectorAll(".btn-top"),
        buttons: document.querySelectorAll(".btn"),
        base: document.querySelector(".base"),
        sun: document.querySelector(".soon"),
        moon: document.querySelector(".moon"),

        start() {
            this.clickButtons()
        },

        clickButtons() {
            document.addEventListener("click", (event) => {
                let element = event.target
                
                if (element.classList.contains('btn-num')) {
                    this.display.innerHTML = this.display.textContent + element.value
                }

                if (element.classList.contains('btn-clear')) {
                    this.display.innerHTML = ''
                    this.result.innerHTML = ''
                }

                if (element.classList.contains('btn-resu')) {
                    this.operation()
                }

                if (element.classList.contains('btn-del')) {
                    this.operation()
                }

                if (element.classList.contains('btn-par')) {
                    this.parentheses()
                }

                element.classList.contains('soon') ? this.changeTheme(1) : this.changeTheme(0)
            })
        },

        operation() {
            let conta = this.display.textContent

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta inválida')
                    return
                }

                this.result.innerHTML = conta
            } catch (e) {
                alert('Conta inválida')
                return
            }
        },

        parentheses() {
            clicks += 1
        
            if (clicks === 1) { this.display.innerHTML = this.display.textContent + '(' 

            } else if (clicks === 2){ this.display.innerHTML = this.display.textContent + ')' 

            } else {
                clicks = 0
                parentheses()
            }
        },

        changeTheme(index) {
            fetch("black_light.json").then((response) => {
                response.json().then((themeJson) => {
                    let theme = themeJson.themes[index]

                    this.background.style.backgroundColor = theme.background
                    this.base.style.backgroundColor = theme.buttons

                    this.sun.style.filter = theme.filter
                    this.moon.style.filter = theme.filter

                    for (let button of this.buttons_top) {
                        button.style.backgroundColor = theme.buttons_top
                        button.style.color = theme.color
                    }

                    for (let button of this.buttons) {
                        button.style.backgroundColor = theme.buttons
                        button.style.color = theme.color
                    }
                })
            })
        }
    }
}

let clicks
const calculadora = Calculator()
calculadora.start()