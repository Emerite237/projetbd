exports.index= function(req,res){
    message=''
    if(req.method=="POST"){
        var post= req.body;

       if(!req.files)
       return res.status(400).send("il ny'a pas de fichier a envoye")


       var file= req.file.uploaded_image;

       var img_name = file.name;

       if(file.mimetype=="image/jpeg" || file.mimetype=="image/png" || file.mimetype== "image/gif" ){
         file.nv ('public/data/uploads/'+ file.name,)
       }
    }
}