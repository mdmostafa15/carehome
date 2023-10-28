const express = require('express'),
    router = express.Router();

const service = require('../models/careHomeModel.js');

//http://localhost:5000/api/carehome/
router.get('/', async (req, res) => {
    const carehome = await service.getAllCarehome()
    carehome.forEach((item)=>{
        item.facilities = JSON.parse(item.facilities);
        item.tags = JSON.parse(item.tags);
        return item;
    })
    res.send(carehome);
});

router.get('/:id', async (req, res) => {
    const carehome = await service.getCarehomeById(req.params.id);
    if (carehome == undefined)
        res.status(404).json('no record with given id : ' + req.params.id)
    else{
        carehome.facilities=JSON.parse(carehome.facilities);
        carehome.tags=JSON.parse(carehome.tags);
        res.send(carehome);
    }
});

router.delete('/:id', async (req, res) => {
    const affectedRows = await service.deleteCarehome(req.params.id)
    if (affectedRows == 0)
        res.status(404).json('no record with given id : ' + req.params.id)
    else
        res.send('deleted successfully.')
})

router.post('/', async (req, res) => {
    req.body.facilities=JSON.stringify(req.body.facilities);
    req.body.tags=JSON.stringify(req.body.tags);
    await service.addCarehome(req.body);
    res.status(201).send('posted successfully.');
})

// router.put('/:id', async (req, res) => {
//     const affectedRows = await service.editCarehome(req.body, req.params.id)
//     if (affectedRows == 0)
//         res.status(404).json('no record with given id : ' + req.params.id)
//     else
//         res.send('updated successfully.')
// })

module.exports = router;