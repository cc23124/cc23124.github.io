let modoCE = 1 // começa com modo claro

function trocarModo(){
    if (modoCE == 0){ // troca para modo escuro
        document.documentElement.style.setProperty('--principal', '#1B2A34')
        document.documentElement.style.setProperty('--secundaria', '#F8F0D2')
        modoCE = 1
        document.querySelector("#modoCE").src = "./imgs/moon.png"
        // document.querySelector("#logo").style += "; box-shadow: 0px 10px 10px var(#ffff)"

    } else{ // troca para modo claro
        document.documentElement.style.setProperty('--secundaria', '#1B2A34')
        document.documentElement.style.setProperty('--principal', '#F8F0D2')
        modoCE = 0
        document.querySelector("#modoCE").src = "./imgs/sun.png"
    }
}

