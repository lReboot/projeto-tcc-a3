function correctionRG(input) {
    // remove e substitui os caracteres que não são parte do rg
    let rg = input.value.replace(/[^\dxX]/g, '');

    if(rg.length > 9){
        rg = rg.slice(0, 9);
    }

    //faz a formatação do RG informado
    rg = rg.replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/(\d{2})\.(\d{3})\.(\d{3})([0-9Xx])/, '$1.$2.$3-$4');

    //insere o rg com as atualizações feitas pela expressão regular
    input.value = rg;
    }

function validationRG(input) {
    let rg = document.getElementById("rg").value;

    // expressão para verificar se o dado é valido
    let regex = /^\d{2}\.\d{3}\.\d{3}-[0-9Xx]$/;

    // verifica se o RG segue o padrão da regex
    let showResultRG = document.getElementById("showResultRG");
    if (showResultRG = regex.test(rg)) {
        showResultRG.textContent = "Válido\u2714\uFE0F";
        showResultRG.style.color = "green";
    } else {
        showResultRG.textContent = "Inválido\u274C";
        showResultRG.style.color = "red";
  }
}


function correctionCPF(input){
    let cpf = input.value.replace(/\D/g, '');
    if(cpf.length > 11){
        cpf = cpf.slice(0, 11);
    }
    cpf = cpf.replace(/(\d{3})(\d)/,'$1.$2')
            .replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3')
            .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{2})/,'$1.$2.$3-$4')

    input.value = cpf;
}

function validationCPF(input){
    let cpf = document.getElementById("cpf").value;
    let regex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/;
    let showResultCPF = document.getElementById("showResultCPF");
    if(resultCPF = regex.test(cpf)){
        showResultCPF.textContent = "valido";
        showResultCPF.style.color = "green";
    }else{
        showResultCPF.textContent = "invalido";
        showResultCPF.style.color = "red"
    }
}
function correctionRA(input){
    let ra = input.value.replace(/\D/g, '');
    if(ra.length > 9){
        ra = ra.slice(0, 9);
    }
    ra = ra.replace(/(\d{3})(\d)/,'$1.$2')
    .replace(/(\d{3})\.(\d{3})(\d)/,'$1.$2.$3')
    .replace(/(\d{3})\.(\d{3})\.(\d{3})/,'$1.$2.$3')
    input.value = ra;
}
function validationRA(input){
    let ra = document.getElementById("ra").value;
    let regex = /(^\d{3}\.\d{3}\.\d{3}$)/;
    let showResultRA = document.getElementById("showResultRA");
    if(resultRA = regex.test(ra)){
        showResultRA.textContent = "valido";
        showResultRA.style.color = "green";
    }else{
        showResultRA.textContent = "invalido";
        showResultRA.style.color = "red"
    }
}
function correctionName(input){
    let name = input.value.replace(/^[A-Z]+$/,'');

    if(name.length > 40){
        name = name.slice(0, 40);
    }

    input.value = name;
}
document.getElementById("#").addEventListener("submit", function(event) {
    event.preventDefault(); // Para prevenir o envio do formulário

    var nome = document.getElementById("nome").value;
    var RA = document.getElementById("RA").value;
    var date = document.getElementById("date").value;
    var CPF = document.getElementById("CPF").value;
    var RG = document.getElementById("RG").value;
    var nota = document.getElementById("nota").value;
    var email = document.getElementById("email").value;
    var curso = document.getElementById("curso").value;
    var Logadouro = document.getElementById("Logadouro").value;
    var Numero = document.getElementById("Numero").value;
    var Bairro = document.getElementById("Bairro").value;
    var Complemento = document.getElementById("Complemento").value;
    var CEP = document.getElementById("CEP").value;
    var Estado = document.getElementById("Estado").value;
    var Cidade = document.getElementById("Cidade").value;

    console.log("Nome: " + nome);
    console.log("RA: " + RA);
    console.log("Data de Nascimento: " + date);
    console.log("CPF: " + CPF);
    console.log("RG: " + RG);
    console.log("Nota no vestibular: " + nota);
    console.log("Email: " + email);
    console.log("Curso: " + curso);
    console.log("Logadouro: " + Logadouro);
    console.log("Número: " + Numero);
    console.log("Bairro: " + Bairro);
    console.log("Complemento: " + Complemento);
    console.log("CEP: " + CEP);
    console.log("Estado: " + Estado);
    console.log("Cidade: " + Cidade);
});

const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));