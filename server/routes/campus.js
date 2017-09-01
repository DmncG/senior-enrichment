const express = require('express');
const router = new express.Router();
const models = require('../../db/models');
const Campus = models.Campus;
module.exports = router;

router.get('/', function(req,res,next) {
    Campus.findAll()
    .then(campus => {
        res.json(campus)
    })
    .catch(next)
})

router.get('/:id', function(req, res, next){
    const idURI = req.params.id;
    Campus.findOne({where: {id: idURI}})
    .then(campus => {
        res.json('campus')
    })
    .catch(next)
})

router.post('/', function(req, res, next){
    Campus.create(req.body)
    .then(newCampus => {
        res.json(newCampus)
    })
    .catch(next)
})

router.put('/:id', function(req, res, next){
    const campusIDURI = req.params.id
    Campus.update({name: req.body.name}, {where: {id: campusIDURI}})
    .then(campusUpdate => {
        res.json('campus was updated')
    })
    .catch(next)
})

router.delete('/:id', function(req, res, next){
    const campusIdURI = req.params.id;
    Campus.destroy({where: {id: campusIdURI }})
    .then(destroyed => {
        res.json('Campus was destroyed')
    })
    .catch(error => console.error)
})

