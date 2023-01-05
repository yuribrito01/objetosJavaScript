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

},
{
    nome:"Amanda",
    parentesco:"Irmã",
    idade: 30  
}];

function ligarCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

// ligarCliente(cliente.phone[0], cliente.phone[1]);
ligarCliente(...cliente.phone);

const convenio ={
    titular: cliente.nome,
    ...cliente.dependente
}

console.log(convenio);