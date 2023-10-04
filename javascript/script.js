const botoes = document.getElementesBytagName("button")
const cores = ["#D94E333","#2c5697","#D9B33","#8A98BE", "#DDE5ED"]

for (let i =0; i < botoes.length; i++){
    botoes[i]. addEventListener("click", function(){
        document.body.style.background = cores[i]
    })
}