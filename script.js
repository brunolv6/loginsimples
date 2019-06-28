
document.querySelector("button").onclick = () => {
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#password").value;
    if(email && senha){
        fetch("http://localhost:3000/", {
            method: "post",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        }).then(() => alert("Cadastro Feito!"));
    } else {
        alert("Você precisa adicionar um email e uma senha para logar!");
    }
}