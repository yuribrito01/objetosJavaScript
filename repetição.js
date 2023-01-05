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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo == "object" || tipo == "function"){
        continue;
    }
    console.log(`A chave ${chave} tem o valor: ${cliente[chave]}`);
}