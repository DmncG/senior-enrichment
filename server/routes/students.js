const express = require('express');
const router = new express.Router();
const models = require('../../db/models');
const Students = models.Students;
module.exports = router;

router.get('/', function(req,res,next) {
    Students.findAll()
    .then(students => {
        res.json(students)
    })
    .catch(next)
})

router.get('/:id', function(req, res, next){
    const idURI = req.params.id;
    Students.findOne({where: {id: idURI}})
    .then(student => {
        res.json('student')
    })
    .catch(next)
})

router.get('/:campusId/:campusId', function(req, res, next){
    let campusIdURI = req.params.campusId;
    console.log(campusIdURI)
    Students.findAll({where:{campusId: campusIdURI}})
    .then(studentsInCampus => {
        res.json(studentsInCampus)
    })
    .catch()
})

router.put('/:id', function(req, res, next) {
    const idURI = req.params.id
    Students.update({name: req.body.name, email: req.body.email}, {where: {id : idURI}})
    .then(updateStudent => {
        res.json('student updated')
    })
    .catch(next)
})

router.delete('/:id', function(req, res, next){
    const idURI = req.params.id;
    Students.destroy({where: {id: idURI}})
    .then(destroyed => {
        res.json('student was deleted')}
    )
    .catch(next)
})

router.post('/', function(req, res, next) {
    Students.create({name: req.body.name, email: req.body.email})
    .then(newStudent => {
        res.json('student was created')
    })
    .catch()   
})