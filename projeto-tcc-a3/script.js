function correctionRG(input) {
    let rg = input.value.replace(/[^\dxX]/g, "");

    if (rg.length > 9) {
        rg = rg.slice(0, 9);
    }

    rg = rg
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/(\d{2})\.(\d{3})\.(\d{3})([0-9Xx])/, "$1.$2.$3-$4");

    input.value = rg;
}

function validationRG(input) {
    let rg = input.value;
    let regex = /^\d{2}\.\d{3}\.\d{3}-[0-9Xx]$/;
    let showResultRG = document.getElementById("showResultRG");
    if (regex.test(rg)) {
        showResultRG.textContent = "Válido\u2714\uFE0F";
        showResultRG.style.color = "green";
    } else {
        showResultRG.textContent = "Inválido\u274C";
        showResultRG.style.color = "red";
    }
}

function correctionCPF(input) {
    let cpf = input.value.replace(/\D/g, "");
    if (cpf.length > 11) {
        cpf = cpf.slice(0, 11);
    }
    cpf = cpf
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d{2})/, "$1.$2.$3-$4");

    input.value = cpf;
}

function validationCPF(input) {
    let cpf = input.value;
    let regex = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)/;
    let showResultCPF = document.getElementById("showResultCPF");
    if (regex.test(cpf)) {
        showResultCPF.textContent = "Válido\u2714\uFE0F";
        showResultCPF.style.color = "green";
    } else {
        showResultCPF.textContent = "Inválido\u274C";
        showResultCPF.style.color = "red";
    }
}

function correctionRA(input) {
    let ra = input.value.replace(/\D/g, "");
    if (ra.length > 9) {
        ra = ra.slice(0, 9);
    }
    ra = ra
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/(\d{3})\.(\d{3})\.(\d{3})/, "$1.$2.$3");
    input.value = ra;
}

function validationRA(input) {
    let ra = input.value;
    let regex = /(^\d{3}\.\d{3}\.\d{3}$)/;
    let showResultRA = document.getElementById("showResultRA");
    if (regex.test(ra)) {
        showResultRA.textContent = "Válido\u2714\uFE0F";
        showResultRA.style.color = "green";
    } else {
        showResultRA.textContent = "Inválido\u274C";
        showResultRA.style.color = "red";
    }
}

function correctionName(input) {
    let name = input.value.toUpperCase().replace(/[^A-Z\s]/g, "");

    if (name.length > 40) {
        name = name.slice(0, 40);
    }

    input.value = name;
}

function correctionGrade(input) {
    let grade = input.value.replace(/\D/g, "");

    if (grade.length > 4) {
        grade = grade.slice(0, 4);
    }
    input.value = grade;
}

function validationGrade(input) {
    let grade = input.value;
    let regex = /^(0|[1-9][0-9]{0,2}|1000)$/;
    let showResultGrade = document.getElementById("showResultGrade");

    if (regex.test(grade)) {
        showResultGrade.textContent = "Válido\u2714\uFE0F";
        showResultGrade.style.color = "green";
    } else {
        showResultGrade.textContent = "Inválido\u274C";
        showResultGrade.style.color = "red";
    }
}

function correctionPhone(input) {
    let phone = input.value.replace(/\D/g, "");
    if (phone.length > 11) {
        phone = phone.slice(0, 11);
    }
    phone = phone.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");

    input.value = phone;
}

document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Para prevenir o envio do formulário

    var nome = document.getElementById("nome").value;
    var ra = document.getElementById("ra").value;
    var date = document.getElementById("date").value;
    var cpf = document.getElementById("cpf").value;
    var rg = document.getElementById("rg").value;
    var nota = document.getElementById("nota_vestibular").value;
    var email = document.getElementById("email").value;
    var curso = document.getElementById("curso").value;
    var logradouro = document.getElementById("logradouro").value;
    var numero = document.getElementById("numero").value;
    var bairro = document.getElementById("bairro").value;
    var complemento = document.getElementById("complemento").value;
    var cep = document.getElementById("cep").value;
    var estado = document.getElementById("estado").value;
    var cidade = document.getElementById("cidade").value;

    console.log("Nome: " + nome);
    console.log("RA: " + ra);
    console.log("Data de Nascimento: " + date);
    console.log("CPF: " + cpf);
    console.log("RG: " + rg);
    console.log("Nota no vestibular: " + nota);
    console.log("Email: " + email);
    console.log("Curso: " + curso);
    console.log("Logradouro: " + logradouro);
    console.log("Número: " + numero);
    console.log("Bairro: " + bairro);
    console.log("Complemento: " + complemento);
    console.log("CEP: " + cep);
    console.log("Estado: " + estado);
    console.log("Cidade: " + cidade);
});

const form = document.querySelector("form"),
    backBtn = form.querySelector(".backBtn"),
    allInput = form.querySelectorAll(".first input");

form.addEventListener("submit", (event) => {
    alert("Cadastro concluído com sucesso!");
});
