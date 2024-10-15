//cotação de moedas do dia.
const USD = 5.36
const EUR = 6.20
const GBP = 6.50

const description = document.getElementById("description")
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const result = document.getElementById("result")
amount.addEventListener("input", () => {
    const hasCharactersRegex = /\D+/g
    amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$" )
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }
}
function convertCurrency(amount, price, symbol){
    try {
        description.textContent = `${symbol} 1 = ${price}`

        //calculo total
        let total = amount * price
        total = formatcurrencyBRL(total).replace("R$", "")
        //exibindo o resultado do let total
        result.textContent = `${total} Reais`

        //aplicando a classe que exibe o footer para mostrar o resultado.
        footer.classList.add("show-result")
    } catch (error) {
        footer.classList.remove("show-result")

        alert("não foi possivel converter. Tente novamente mais tarde.")


        console.log(error)
    }
}
//função criada para formatar em real brasileiro.
function formatcurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}