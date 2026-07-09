const form = document.getElementById("formCliente");

const lista = document.getElementById("listaClientes");

const contador = document.getElementById("contador");

const pesquisa = document.getElementById("pesquisa");

let clientes =
JSON.parse(localStorage.getItem("clientes")) || [];

function salvar(){

localStorage.setItem("clientes",
JSON.stringify(clientes));

}

function atualizar(){

lista.innerHTML="";

const filtro = pesquisa.value.toLowerCase();

const resultado = clientes.filter(cliente=>{

return cliente.nome.toLowerCase().includes(filtro);

});

resultado.forEach((cliente,index)=>{

lista.innerHTML+=`

<div class="cliente">

<h3>${cliente.nome}</h3>

<p><b>Email:</b> ${cliente.email}</p>

<p><b>Telefone:</b> ${cliente.telefone}</p>

<p><b>Nascimento:</b> ${cliente.nascimento}</p>

<p><b>Sexo:</b> ${cliente.sexo}</p>

<button onclick="remover(${index})">

Excluir

</button>

</div>

`;

});

contador.innerHTML=
`${clientes.length} Clientes`;

}

form.addEventListener("submit",(e)=>{

e.preventDefault();

const cliente={

nome:nome.value,
email:email.value,
telefone:telefone.value,
nascimento:nascimento.value,
sexo:sexo.value

};

clientes.push(cliente);

salvar();

atualizar();

form.reset();

});

function remover(index){

clientes.splice(index,1);

salvar();

atualizar();

}

pesquisa.addEventListener("keyup",atualizar);

atualizar();