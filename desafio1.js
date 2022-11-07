//acessar um objeto com informações de um cliente, e exibir essas informações no console

const cliente ={
    nome:"Yuri",
    idade:20,
    cpf: '123456789'
};

//console.log(cliente);

//melhorando!

console.log(`O nome do cliente é ${cliente.nome} e ele possui ${cliente.idade} anos.\n`);
console.log(`Os 3 primeiros digitos do CPF são: ${cliente.cpf.substring(0,3)}`);