const clientes = require("./clientes.json");

function apartamentoSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return ((cliente.endereco.apartamento) && !(cliente.endereco.hasOwnProperty("complemento")))
    });

}

const filtrados = apartamentoSemComplemento(clientes);

console.log(filtrados);