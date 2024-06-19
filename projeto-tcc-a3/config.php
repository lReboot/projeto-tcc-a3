<?php
$dbHost = 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'tcc-formulario';

$conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if ($conexao->connect_errno) {
    die("Erro: " . $conexao->connect_error);
}

$status = '';

if (isset($_POST['submit'])) {
    $nome = $conexao->real_escape_string($_POST['nome']);
    $ra = $conexao->real_escape_string($_POST['ra']);
    $data_nascimento = $conexao->real_escape_string($_POST['data_nascimento']);
    $cpf = $conexao->real_escape_string($_POST['cpf']);
    $rg = $conexao->real_escape_string($_POST['rg']);
    $nota_vestibular = $conexao->real_escape_string($_POST['nota_vestibular']);
    $documento = '';
    $email = $conexao->real_escape_string($_POST['email']);
    $telefone = $conexao->real_escape_string($_POST['telefone']);
    $curso = $conexao->real_escape_string($_POST['curso']);
    $logradouro = $conexao->real_escape_string($_POST['logradouro']);
    $numero = $conexao->real_escape_string($_POST['numero']);
    $bairro = $conexao->real_escape_string($_POST['bairro']);
    $complemento = $conexao->real_escape_string($_POST['complemento']);
    $cep = $conexao->real_escape_string($_POST['cep']);
    $estado = $conexao->real_escape_string($_POST['estado']);
    $cidade = $conexao->real_escape_string($_POST['cidade']);

    if (isset($_FILES['documento']) && $_FILES['documento']['error'] == 0) {
        $documento_dir = 'uploads/';
        $documento_nome = basename($_FILES['documento']['name']);
        $documento_caminho = $documento_dir . $documento_nome;

        if (move_uploaded_file($_FILES['documento']['tmp_name'], $documento_caminho)) {
            $documento = $conexao->real_escape_string($documento_caminho);
        } else {
            $status = 'error';
        }
    }

    if ($status !== 'error') {
        $sql = "INSERT INTO alunos (nome, ra, data_nascimento, cpf, rg, nota_vestibular, documento, email, telefone, curso, logradouro, numero, bairro, complemento, cep, estado, cidade) 
                VALUES ('$nome', '$ra', '$data_nascimento', '$cpf', '$rg', '$nota_vestibular', '$documento', '$email', '$telefone', '$curso', '$logradouro', '$numero', '$bairro', '$complemento', '$cep', '$estado', '$cidade')";

        if ($conexao->query($sql) === TRUE) {
            $status = 'success';
        } else {
            $status = 'error';
        }
    }

    $conexao->close();
    header("Location: index.html?status=$status");
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Alunos</title>
</head>

<body>
    <h1>Cadastro de Alunos</h1>
    <?php
    if (isset($_GET['status'])) {
        if ($_GET['status'] === 'success') {
            echo '<p>Dados inseridos com sucesso!</p>';
        } elseif ($_GET['status'] === 'error') {
            echo '<p>Ocorreu um erro ao inserir os dados. Por favor, tente novamente.</p>';
        }
    }
    ?>
</body>

</html>