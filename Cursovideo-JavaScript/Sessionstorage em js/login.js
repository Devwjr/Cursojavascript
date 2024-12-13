// Script para realizar o login e controlar a sessão

// Função de login
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Previne o recarregamento da página

    // Pega os valores de entrada
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Aqui você poderia verificar o usuário e senha
    // Por simplicidade, vamos supor que os dados estão corretos e simular um login
    if (username === "usuario" && password === "1234") {
        // Armazena o nome de usuário na sessão
        sessionStorage.setItem("username", username);
        
        // Redireciona para a página inicial após o login
        window.location.href = "home.html";
    } else {
        alert("Usuário ou senha incorretos");
    }
});

// Script para verificar a sessão na página inicial e realizar o logout
document.addEventListener("DOMContentLoaded", function() {
    const username = sessionStorage.getItem("username");

    // Exibe mensagem de boas-vindas ou redireciona para login
    if (username) {
        document.getElementById("welcomeMessage").textContent = `Bem-vindo, ${username}!`;
    } else if (window.location.pathname.includes("home.html")) {
        window.location.href = "index.html";
    }

    // Função de logout
    document.getElementById("logoutButton")?.addEventListener("click", function() {
        sessionStorage.removeItem("username");
        window.location.href = "index.html";
    });
});