const dados = require("./cliente.json");

console.log(dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);

const objCliente = JSON.parse(clienteEmString);

console.log(objCliente);