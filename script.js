
document.querySelector("button").onclick = () => {
    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#password").value;
    let n = 2;
    if(document.querySelector("#nome") !== null){
        /* IMPORTANTÍSSIMO */
        /* SE DEFINIDO DENTRO DAQUI NOME NÃO PASSARÁ NO JSON NO CADASTRO!!! */
        /* const nome = document.querySelector("#nome").value; */
        n = 3;
    }
    if(email && senha && n === 2){
        fetch("http://localhost:3000/users", {
            method: "put",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                nome: "amanda",
                email: email,
                password: senha
            })
        }).then((res) => res.json())
        .then((dado) => console.log(dado));
    } else if(email && senha && n === 3) {
        const nome = document.querySelector("#nome").value;
        fetch("http://localhost:3000/users", {
            method: "post",
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                nome: nome,
                email: email,
                password: senha
            })
        }).then((res) => res.json())
        .then((dado) => console.log(dado));
    } else {
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