//importar o mongoose
const mongoose = require('mongoose')
//scritps de conexao 
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userLR:loginRegistro@fiaptecnico.ng17z.mongodb.net/dblr')
}

//exportar as informações para acesso externo 
module.exports = conn