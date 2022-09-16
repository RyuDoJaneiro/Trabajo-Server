const ctrlHome = {};

ctrlHome.getHome = ((req, res)=>{
        res.send({
                message: "Petición GET"
        })
});
ctrlHome.postHome = ((req, res)=>{
        res.send({
                message: "Petición POST"
        })
});
ctrlHome.putHome = ((req, res)=>{        
        res.send({
                message: "Petición PUT"
        })
});
ctrlHome.deleteHome = ((req, res)=>{
        res.send({
                message: "Petición DELETE"
        })
});
module.exports = ctrlHome;