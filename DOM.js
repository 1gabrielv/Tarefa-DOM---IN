// let secao = document.querySelector('.section_messages');
// function enviar_mensagem(){
//     let input = document.querySelector('.input_messages');
//     let escopo = document.createElement('div');
//     let texto = document.createElement('p');
//     texto.innerText = input.value;
//     escopo.append(texto);
//     secao.append(escopo);
//     console.log("A mensagem é: " + texto.innerText);
// }

// function limpar_mensagem(){
//     secao.innerText = '';
// }

// let btn_limpar = document.querySelector('#btn_limpar');
// btn_limpar.addEventListener('click', limpar_mensagem);
// let btn_enviar = document.querySelector('#btn_enviar');
// btn_enviar.addEventListener('click',()=>{enviar_mensagem()});

function enviar_mensagem() {
    let input = document.querySelector('.text');
    let texto = input.value.replace(",", ".");
    let textArea = document.querySelector('#textarea');
    if(texto.trim() === "") {
        alert("Por favor, insira uma nota");
    }
    else if (!isNaN(Number(texto)) && texto<=10 && texto>=0) {
    textArea.value += "A nota " + textArea.value.split("\n").length + " foi: " + texto + "\n";
    console.log("A nota é: " + texto);
    }
    else {
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
    }
}

function calcular_media() {
    let textArea = document.querySelector('#textarea'); 
    let soma = 0;

    if(textArea.value.trim() === "") {
        alert("Por favor, insira pelo menos uma nota para calcular a média.");
        return;
    }

    for (let i = 0; i < textArea.value.split("\n").length - 1; i++) {
        let linha = textArea.value.split("\n")[i];
        let nota = Number(linha.split(": ")[1]);
        soma += nota;
    }

    let media = soma / (textArea.value.split("\n").length - 1);
    
    let novoParagrafo = document.createElement('p');
    novoParagrafo.innerText = media.toFixed(2);
    let resultado = document.querySelector('.resultado');
    let paragrafos = resultado.querySelectorAll('p');

    if(paragrafos.length == 2) {
        resultado.removeChild(paragrafos[1]);
        resultado.append(novoParagrafo);
    }
    else {
        resultado.append(novoParagrafo);
    }
}

let btn_enviar = document.querySelector('.button');
btn_enviar.addEventListener('click', ()=>{enviar_mensagem()});

let btn_media = document.querySelector('.btn_media');
btn_media.addEventListener('click', ()=>{calcular_media()});
