const express = require('express'),
    router = express.Router();
    
    const service = require('../models/searchModel.js');
    

    router.get('/', async (req, res) => {
        const carehome = await service.getCarehomeByQuery(req.query);
        carehome.forEach((item)=>{
            item.facilities = JSON.parse(item.facilities);
            item.tags = JSON.parse(item.tags);
            return item;
        })
        res.send(carehome);
    });

module.exports=router;