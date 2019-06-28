
document.querySelector("button").onclick = () => {
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#password").value;
    if(email && senha && !nome){
        fetch("http://localhost:3000/", {
            method: "post",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                email: email,
                senha: senha
            })
        }).then(() => alert("Cadastro Feito!"));
    } /* else if(email && senha & !nome) {
        fetch
    } */ else {
        alert("Você precisa adicionar um email e uma senha para logar!");
    }
}

document.querySelector(".registrar").onclick = () => {
    //trocando título
    document.querySelector(".titulo").innerHTML = "Registrar";

    //criar atributo type e dar seu valor
    const ty = document.createAttribute("type");
    ty.value = "text";
    //criar atributo id e dar seu valor
    const id = document.createAttribute("id");
    id.value = "nome";
    //criar atributo placeholder e dar seu valor
    const pl = document.createAttribute("placeholder");
    pl.value = "nome..";
    //criar input e dar seus atributos
    const input = document.createElement("input");
    input.setAttributeNode(ty);
    input.setAttributeNode(id);
    input.setAttributeNode(pl);
    //cria div
    const di = document.createElement("div");
    di.appendChild(input);

    //add input no div correto
    document.querySelector(".dados").insertBefore(di, document.querySelector("#firstDiv"));

    //registrar ao final trocar por login
    document.querySelector(".registrar").innerHTML = "Login";
/*     document.querySelector(".registrar").classList.add(".login");
    document.querySelector(".login").classList.remove(".registrar"); */
}