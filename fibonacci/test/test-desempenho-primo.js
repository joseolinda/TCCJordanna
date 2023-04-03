//IMPORTAR JS
import getNthPrime from "../js/primo.js"
// ENTRADA
const entrada = document.querySelector("#entrada")
const calcular = document.querySelector("#calcular")

let tempo = {
    JS: [],
    WASM: []
}
// WASM
const entradaWASM = document.querySelector("#entrada-wasm")
const saidaWASM = document.querySelector("#saida-wasm")
const inicalWASM = document.querySelector("#inical-wasm")
const finalWASM = document.querySelector("#final-wasm")
const duracaoWASM = document.querySelector("#duracao-wasm")


// JS
const entradaJS = document.querySelector("#entrada-JS")
const saidaJS = document.querySelector("#saida-JS")
const inicalJS = document.querySelector("#inical-JS")
const finalJS = document.querySelector("#final-JS")
const duracaoJS = document.querySelector("#duracao-JS")


const escreverResultadoWASM = (inicioWASM, resultWASM, fimWASM) => {
    entradaWASM.innerText = entrada.value
    saidaWASM.innerText = resultWASM
    inicalWASM.innerText = inicioWASM.toFixed(5)
    finalWASM.innerText = fimWASM.toFixed(5)
    duracaoWASM.innerText = ((fimWASM - inicioWASM) / 1000).toFixed(5) + "s"
    tempo.WASM.push({entrada: entradaWASM.innerText, tempo: duracaoWASM.innerText })
}

const escreverResultadoJS = (inicioJS, resultJS, fimJS) => {
    entradaJS.innerText = entrada.value
    saidaJS.innerText = resultJS
    inicalJS.innerText = inicioJS.toFixed(5)
    finalJS.innerText = fimJS.toFixed(5)
    duracaoJS.innerText = ((fimJS - inicioJS) / 1000).toFixed(5) + "s"
    tempo.JS.push({entrada: entradaJS.innerText, tempo: duracaoJS.innerText })
}

const compararDesempenhoWASM = async (entrada) => {
    // WASM 
    const response = await fetch('./WASM/primo.wasm')
    const buffer = await response.arrayBuffer()
    const module = await WebAssembly.compile(buffer)
    const instance = await WebAssembly.instantiate(module, {})
    const nthPrime = instance.exports.nth_prime;

    const inicioWASM = performance.now()
    const resultWASM = nthPrime(entrada)
    const fimWASM = performance.now()

    escreverResultadoWASM(inicioWASM, resultWASM, fimWASM)

}

const compararDesempenhoJS = async (entrada) => {

    // JS 
    const inicioJS = performance.now()
    const resultJS = getNthPrime(entrada)
    const fimJS = performance.now()

    escreverResultadoJS(inicioJS, resultJS, fimJS)

}

// evento
calcular.addEventListener('click', async (e) => {
    e.preventDefault()
    const input = parseInt(entrada.value)

    await compararDesempenhoWASM(input)
    await compararDesempenhoJS(input)

    console.log(tempo)
})