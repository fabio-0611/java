
/* Aparecerá no console */

window.alert(`Vamos vê se você está apto a votar?`);
var nome=(window.prompt(`Digite o seu nome, por favor:`));
var idade=(window.prompt(`Digite a sua idade ${nome} por favor:`));
window.alert(`Seja bem vindo ao sistema ${nome} e à sua idade é ${idade} anos!`);

    if(idade< 16){
        window.document.writeln(` ${nome} você não vota e têm ${idade} anos!`);
    }else if( idade < 18 || idade > 65){
        window.document.write(`O voto é opcional `+nome);
    }else{
        window.document.write(`O voto é obrigatório `+nome);
    }
 

/* *******Verificador de Idade********** */
function verificar(){
    var data= new Date();
    var ano= data.getFullYear();//pega a ano 
    var fano = window.document.getElementById(`txtano`);
    var res = window.document.getElementById(`res`);

    if(fano.value.length == 0 || Number(fano.value) >ano){
        res.innerHTML=`[ERRO] você digitou a idade errada`;
    }else{
        var fsex= document.getElementsByName(`radsex`);
        var ida= ano - Number(fano.value);
        var genero= ''
        var img= window.document.createElement(`img`);
        img.setAttribute(`id`, `foto`);
        if(fsex[0].checked){
            genero= `Homem`;
            if(ida>=0 && ida < 10){
                /* Criança */
                img.setAttribute(`src`, `./Img/bebe_menino.jpeg`);
            }
            else if(ida < 21){
                /* Jovem */
                img.setAttribute(`src`, `./Img/jovem.jpeg`)

            }
            else if(ida < 51){
                /* Adulto */
                img.setAttribute(`src`, `./Img/homem_adulto.jpg`)

            }
            else{
                /* Idoso */
                img.setAttribute(`src`, `./Img/idoso_homem.jpeg`)

            }
        }else if(fsex[1].checked){
            genero= `Mulher`
            if(ida>=0 && ida < 10){
                  /* Criança */
                  img.setAttribute(`src`, `./Img/bebe_menina.jpeg`);
            }
            else if(ida < 21){
                /* Jovem */
                img.setAttribute(`src`, `./Img/mulher_joven.jpeg`);
            }
            else if(ida < 51){
                /* Adulto */
                img.setAttribute(`src`, `./Img/mulher_adulta.jpeg`);
            }
            else{
                /* Idoso */
                img.setAttribute(`src`, `./Img/idosa_mulher.jpeg`);
            }
        }
        res.style.textAlign= `center`;
        res.innerHTML= `Detectamos ${genero} com ${ida} anos que se chama ${nome}`;
        res.appendChild(img)
    }
}
    /* Imprimir na tela */
    
    function valor(){
        var a=window.document.getElementById(`n1`)
        var n1 = Number(a.value)
        if(n1<16){
            window.document.getElementById(`resultado`);
            resultado.innerHTML=`${nome} você não vota e têm ${n1}anos`;
            
        }
        else if(n1 <18 || n1 >65){
            
            window.document.getElementById(`resultado`);
            resultado.innerHTML=`${nome} você tem ${n1}anos e o voto é opcional`;

        }else{
    
            window.document.getElementById(`resultado`);
            resultado.innerHTML=`${nome} você têm ${n1}anos o voto é obrigatório`;
        }
}

function sair(){
    var a= window.document.getElementById('btn');
    a.innerText= "Você clicou";
    a.style.background="blue";
}

function entrar(){
    var b= window.document.getElementById(`n`);
    var n= Number(b.value);
       if(n<18){
            window.document.getElementById(`result`);
            result.innerHTML=`${nome} você têm ${n}anos e não pode tirar habilitação`;
            
        }else{
            window.document.getElementById(`result`);
            result.innerHTML=`${nome} você têm ${n}anos e<strong> está apto para tirar habilitação</strong>`;
        }
}

function opt(){
    
    var nota1 =window.document.getElementById(`n2`);
    var nota2 = window.document.getElementById(`n3`);
    var media = window.document.getElementById(`media`);    
    var n2= Number(nota1.value);
    var n3= Number(nota2.value);
    var total= n2+n3/(2);

    if(total <5){
        window.document.getElementById(`media`);
        media.innerHTML=`${nome} você esta <strong><i> REPROVADO à sua média foi ${total} </I></strong>`;
    }else if(total <7){
        window.document.getElementById(`media`);
        media.innerHTML=`${nome} você está de <strong><i>RECUPERAÇÃO e à sua média foi ${total}</I></strong>`;
    }else{
     window.document.getElementById(`media`);
     media.innerHTML=`Parabéns ${nome} você foi <strong><i>APROVADO à sua média foi ${total}</I></strong>`; 
    } 
    
} 
function prefeito(){
    var c= window.document.getElementById(`candidato`);
    var candidato= Number(c.value);

    switch(candidato){
        case 1:
            window.document.getElementById(`cand`);
            cand.innerHTML=`${nome} você escolheu à Marli`;
            break;
    
        case 2:
            window.document.getElementById(`cand`);
            cand.innerHTML=`${nome} você escolheu o João`;
            break;
    
        case 3:
            window.document.getElementById(`cand`);
            cand.innerHTML=`${nome} você escolheu à José.`;
            break;
    
        case 4:
            window.document.getElementById(`cand`);
            cand.innerHTML=`${nome} você escolheu o Fagundes.`;
            break;

            default:
                window.document.getElementById(`cand`)
                cand.innerHTML=`Escolha um número válido`;
                break;
            }
        
}
