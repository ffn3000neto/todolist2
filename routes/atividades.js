module.exports = (app)=> {
    app.post('/atividades', async(req,res)=> {
        //recuperando as info digitadas
        var dados = req.body
        //exibindo no terminal
        console.log(dados)
    })
}