 
window.alert(`Bora trabalhar com funções!`);
var nome=String(window.prompt(`Digite o seu nome: `));
window.alert(`Sejá bem vindo ao sistema ${nome}`);
document.write(`Seja bem vindo ao sistema<strong><i> ${nome}`)
window.alert(`Vamos fazer uma operação matemática de adição ${nome}?`)
var m1=Number(window.prompt(`Digite um número: ${nome}`))
var m2=Number(window.prompt(`Digite outro número: ${nome}`))
var soma = m1+m2
window.alert(`${nome} o valor da adição é ${soma}`);

/* Levando o reultado para a página inicial */
function topo(){
    var b=window.document.getElementById('topo')
    var c= String(b.value)
    b.innerHTML=`Seja bem vindo ao sistema<strong><i> ${nome} o resultado da operação foi ${soma}`
}
  
function clicou(){
    var a= window.document.getElementById('mouse');
    a.innerText= "Mudança de cor";
    a.style.background="blue";
}
function entrar(){
    var a = window.document.getElementById(`area`);
    a.style.background="red";
    a.innerText="Entrou!"
}
function sair(){
    var a = window.document.getElementById(`area`);
    a.innerText="saiu";
    a.style.background="green";
}
function clicar(){
    var a= window.document.getElementById('area');
    a.innerText= "Click";
    a.style.background="blue";
}

/* Declarando variaveis de soma no input */
function somar (){
    var tn1 = window.document.getElementById ('txt1')
    var tn2 = window.document.getElementById ('txt2')
    var resultado = window.document.getElementById('resultado')
    var n1= Number(tn1.value)
    var n2= Number(tn2.value)
    var valor = n1+n2
    resultado.innerHTML=`A soma entre ${n1} e ${n2} é igual a    ${valor}`
}

function subtrair (){
    
    var sub1= window.document.getElementById('sub1')
    var sub2= window.document.getElementById('sub2')
    var subtracao= window.document.getElementById('subtracao')
    var s1= Number(sub1.value)
    var s2= Number(sub2.value)
    var total = s1 - s2
    subtracao.innerHTML=`A subtração entre ${s1} e ${s2} é igual a ${total} `
}

function multiplicacao(){
    var mult1= window.document.getElementById('mult1')
    var mult2= window.document.getElementById('mult2')
    var multiplicar=  window.document.getElementById('multiplicacao')
    var m1= Number(mult1.value)
    var m2= Number(mult2.value)
    var vezes = m1 * m2
    multiplicar.innerHTML=`O valor da multiplicação entre ${m1} e ${m2} é igual a ${vezes}`
}

function dividir(){
    var div1 = window.document.getElementById('div1')
    var div2 = window.document.getElementById('div2')
    var divisao= window.document.getElementById('dividir')
    var d1= Number(div1.value)
    var d2= Number(div2.value)
    var div = d1/d2
    divisao.innerHTML= `O valor da divisão entre ${d1} e ${d2} é igual a ${div}`
}
