const cliente ={
    nome:"Yuri",
    idade:20,
    cpf: '123456789',
    email:"yuri@email.com",
    phone: ["707070","123445"]
};

cliente.dependente = [{
    nome:"Yara",
    parentesco:"Irmã",
    idade: 20

}]

cliente.dependente.push({
    nome:"Amanda",
    parentesco:"Irmã",
    idade: 30
})

console.log(cliente);