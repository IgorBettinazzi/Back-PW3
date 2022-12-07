const express = require("express");
const Pizza = require("../model/Pizza");
const router = express.Router();
const modelPizza = require("../model/Pizza");

router.get("/listarInstrumento", (req, res) => {
  modelPizza 
    .findAll()
    .then((Pizza) => {
      return res.status(200).json(Pizza);
    })
    .catch((erro) => {
      return res.status(400).json({
        erroStatus: true,
        erroMessagem: "Houve um erro ao selecionar os dados da Pizza",
        erroBancoDados: erro,
      });
    });
});

router.get("/listarPizza/:id", (req, res) => {
    let {id} = req.params;

    Pizza
      .findByPk(id)
      .then((Pizza) => {
        return res.status(200).json(Pizza);
      })
      .catch((erro) => {
        return res.status(400).json({
          erroStatus: true,
          erroMessagem: "Houve um erro ao selecionar os dados da pizza",
          erroBancoDados: erro,
        });
      });
  });
router.post('/inserirPizza', (req, res)=>{
      
    let {nome_pizza} = req.body;
    
        modelPizza.create(
        {nome_pizza}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'Pizza inserida com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar a pizza',
                        erroBancoDados: erro
                    });
        }
    );

});

router.put('/alterarPizza', (req, res)=>{

    let {id, nome_pizza} = req.body;
    modelPizza.update(
        {nome_pizza},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Pizza alterada com sucesso!'
        });
    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar a Pizza',
                        erroBancoDados: erro
                    });
        }
    );

});


router.delete('/excluirPizza/:id', (req, res) => {
    
    let { id } = req.params;
    modelPizza.destroy(
        { where: { id } }
    ).then(() => {

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'Pizza excluida com sucesso!'
        });

    }).catch(
        (erro) => {
            return res.status(400).json({
                erroStatus: true,
                erroMessagem: 'Houve um erro ao excluir a Pizza',
                erroBancoDados: erro
            });
        }
    );

});

module.exports = router;
