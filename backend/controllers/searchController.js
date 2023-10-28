const express = require('express'),
    router = express.Router();
    
    const service = require('../models/searchModel.js');
    
// http://localhost:5000/api/carehome/search
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