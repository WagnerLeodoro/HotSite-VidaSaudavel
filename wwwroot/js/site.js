$(document).ready(function () {
    $("#frmCadastro").submit(function (e) {
        e.preventDefault();
        Cadastrar();
    });
});

function Cadastrar() {
    let params = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#mensagem").val(),
    };
    $.post("/Home/Cadastrar", params)
        .done(function (data) {
            if (data.status == "SUCCESS") {
                $("#frmCadastro").after("<h3>Agradecemos o seu contato!</h3>");
                $("#frmCadastro").hide();
            }
            else {
                alert(data.mensagem);
            }
        })
        .fail(function () {
            alert("Erro desconhecido, tente mais tarde!");
        })
};