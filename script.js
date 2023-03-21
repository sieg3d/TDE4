document.write(`<p>1. Faça um programa que preencha por leitura um vetor de 10 posições, e conta
quantos valores diferentes existem no vetor.</p>`)

posicoes = []
contador = {}
for (i = 0; i < 10; i++) {
  posicoes.push(prompt(`Digite o valor da posição ${i + 1}:`))
  valor = posicoes[i]
  if (contador[valor]) {
    contador[valor]++

  } else {
    contador[valor] = 1
  }
}
document.write(`<br><br>Os valores digitados foram ${posicoes}.<br>Existem ${Object.keys(contador).length} valores diferentes no vetor.`)

//---------------------------------------------------------------------------------------------------------------------------------------

document.write(`<p>2. Crie um programa que leia quatro valores pelo teclado e guarde-os em um vetor.
No final mostre: <br>a) Quantas vezes apareceu o valor 9. <br>b) Em que posição foi digitado o primeiro valor 3. <br>c) Quais foram os números pares.</p>`)

numerosDigitados = []
valorNove = 0
numeroPar = []


for (var i = 0; i < 4; i++) {
    var valor = +(prompt(`Digite o valor ${i + 1}:`))
    numerosDigitados.push(valor)
}

document.write(`Os numeros digitados foram: ${numerosDigitados}.`)


for (var i = 0; i < 4; i++) {
    if (numerosDigitados[i] === 9) {
        valorNove++
    }
    if (numerosDigitados[i] % 2 == 0) {
        numeroPar.push(numerosDigitados[i])
    }
}


if (valorNove == 1) {
    document.write(`<br>a) O número 9 apareceu ${valorNove} vez`)
}
else { document.write(`<br>a) O número 9 apareceu ${valorNove} vezes`) }

document.write(`<br>b) O primeiro número 3 foi digitado na posição ${numerosDigitados.indexOf(3)}`)

document.write(`<br>c) Numeros pares digitados: ${numeroPar}`)

//---------------------------------------------------------------------------------------------------------------------------------------

document.write(`<p>3. Um dado é lançado 50 vezes, e o valor correspondente é armazenado em um vetor. Faça um programa que determine o percentual de
ocorrências de face 6 do dado dentre esses 50 lançamentos.</p>`)

var dado = []
var faceSeis = 0
percentual = {}
for (i = 0; i < 50; i++) {
    var rollDado = (Math.random() * 5) + 1
    dado.push(rollDado.toFixed(0))
    if (dado[i] == 6) {
        faceSeis++
    }
}

document.write(`<br>Os números sorteados são: ${(dado)}.<br>`)
document.write(`A face 6 foi revelada ${(faceSeis)} vezes<br>`)
percentual = (faceSeis / 50) * 100
document.write(`O que representa ${(percentual.toFixed(0))}%<br>`)

//---------------------------------------------------------------------------------------------------------------------------------------

document.write(`<p>4. Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a
multiplicação e os números.</p>`)

numInteiros = [5, 4, 3, 2, 1]
var soma = 0
var mult = 1

for (i = 0; i < numInteiros.length; i++) {
    soma += numInteiros[i]
    mult *= numInteiros[i]
}
document.write(`Os numeros do vetor são: ${numInteiros}.`)
document.write(`<br>A soma de todos os números é ${soma}.`)
document.write(`<br>E o produto de todos os numeroos é ${mult}.`)

//---------------------------------------------------------------------------------------------------------------------------------------

document.write(`<p>5. Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.</p>`)

idades = []
alturas = []

for (i = 0; i < 5; i++) {
    idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}`))
    altura = parseFloat(prompt(`Digite a altura da pessoa ${i + 1}`))
    idades.push(idade)
    alturas.push(altura)
}

document.write(`<br>As idades inseridas de forma inversa foram: ${idades.reverse()}`)
document.write(`<br>E as alturas também de forma inversa são: ${alturas.reverse()}`)


//---------------------------------------------------------------------------------------------------------------------------------------

document.write(`6. Utilizando um vetor, faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
<br>a) "Telefonou para a vítima?"
<br>b) "Esteve no local do crime?"
<br>c) "Mora perto da vítima?"
<br>d) "Devia para a vítima?"
<br>e) "Já trabalhou com a vítima?"
<br><br>O programa deve no final emitir uma classificação sobre a participação da pessoa
no crime. Se a pessoa responder positivamente a 2 questões ela deve ser
classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino".
Caso contrário, ele será classificado como "Inocente".`)

var perguntas = ["Telefonou para a vítima?", "Esteve no local do crime?", "Mora perto da vítima?", "Devia para a vítima?", "Já trabalhou com a vítima?"]
resposta = 0

for (i = 0; i < perguntas.length; i++) {
    pergunta = prompt(`${perguntas[i]}`)
    if (pergunta === "sim") {
        resposta++
    }
}

if (resposta == 2) {
    document.write(`<p>A pessoa é suspeita.`)
} else if (resposta >= 3 && resposta <= 4) {
    document.write(`<p>A pessoa é cumplice.`)
} else if (resposta == 5) {
    alert(`É O ASSASSINO!`)
    document.write(`<p>Discando 190...`)
} else {
    document.write(`<p>A pessoa é inocente.`)
}




document.write(`7. Faça um programa que simule um lançamento de dados. Lance o dado 10 vezes e
armazene os resultados em um vetor. Depois, monte um outro vetor contendo
quantas vezes cada valor foi obtido. Imprima os dois vetores. Use uma função para
gerar números aleatórios, simulando os lançamentos dos dados.
Exemplo de uma possível saída:
[3, 1, 5, 3, 5, 4, 5, 5, 3, 6]
[1, 0, 3, 1, 4, 1]`)


dado = []
lado1 = 0
lado2 = 0
lado3 = 0
lado4 = 0
lado5 = 0
lado6 = 0
lados = []

for (i = 0; i < 10; i++) {
    roll = (Math.random() * 5) + 1
    dado.push(roll.toFixed(0))

    if (dado[i] == 1) {
        lado1++
    } else if (dado[i] == 2) {
        lado2++
    } else if (dado[i] == 3) {
        lado3++
    } else if (dado[i] == 4) {
        lado4++
    } else if (dado[i] == 5) {
        lado5++
    } else if (dado[i] == 6) {
        lado6++
    }
}

lados.push(lado1, lado2, lado3, lado4, lado5, lado6)


//checagem de valores armazenados
// document.write(`<br><br>${lado1}`)
// document.write(`<br><br>${lado2}`)
// document.write(`<br><br>${lado3}`)
// document.write(`<br><br>${lado4}`)
// document.write(`<br><br>${lado5}`)
// document.write(`<br><br>${lado6}`)

document.write(`<br><br>Os numeros sorteados foram:<br>${dado}`)
document.write(`<br>E quantidade de cada face sorteada foi:<br>${lados}`)

//---------------------------------------------------------------------------------------------------------------------------------------

document.write(`8. Faça um programa que percorre um vetor e imprime na tela o valor mais próximo
da média dos valores do vetor.
Exemplo:
vetor = [2.5, 7.5, 10.0, 4.0]
(média=6.0)
Valormaispróximodamédia=7.5`)


vetor = [1, 5, 9, 12, 7, 3]
soma = vetor[0] + vetor[1] + vetor[2] + vetor[3] + vetor[4] + vetor[5]
media = soma / vetor.length

maisProximo = vetor[0]
for (i = 1; i < vetor.length; i++) {
    if (Math.abs(vetor[i] - media) < Math.abs(maisProximo - media)) {
        maisProximo = vetor[i]
    }

}
// document.write(`<br><br>${soma}`)  conferencia de valor
document.write(`<br><br>A média dos valores é ${media.toFixed(1)}.`)
document.write(`<br>E o valor mais próximo da média é ${maisProximo}.`)