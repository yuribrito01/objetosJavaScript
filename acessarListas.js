const cliente ={
    nome:"Yuri",
    idade:20,
    cpf: '123456789',
    email:"yuri@email.com"
};

const chaves = ["nome","idade","cpf","email"];

//console.log(cliente[chaves[0]])
//Usando forEach

chaves.forEach(info=>console.log(cliente[info]));
