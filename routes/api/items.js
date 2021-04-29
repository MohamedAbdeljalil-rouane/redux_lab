const express = require("express");
const router = express.Router();


const Item = require("../../model/item");

//implementation of GET 
router.get("/", function(req, res){
    
    Item.find()
    .sort({date: -1})
    .then(items => res.json(items));

});

//implementation of POST
router.post("/", function(req, res){
    const NewItem = new Item({
        name : req.body.name 
    });
    
    NewItem.save().then( item => res.json(item));
});


//implementation of DELETE
router.delete("/:id", function(req, res){
    Item.findById(req.params.id)
    .then( item => item.remove().then( ()=> res.json({ success: true })))
    .catch( err => res.status(404).json({ success:  false }));
});


module.exports = router;