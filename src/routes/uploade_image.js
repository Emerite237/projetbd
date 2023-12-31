const {imagesuploads}= require('../db/sequelize')
const {annonce}= require('../db/sequelize')
const {ValidationError}= require('sequelize')
const {UniqueConstraintError}=require('sequelize')
const image=require("../models/imagesuploads")
var annonces=require("../models/annoce_voiture")
const path= require("path")
const multer =require("multer");

const cors= require("cors")

 var images = new Array()

 var tab=[]

const uploadDir = path.join(__dirname, './public/data');
//const imagePath = path.join(uploadDir, 'uploads', `${filename}.jpg`);


const  MIME_TYPES={
  "image/jpg" : "jpg",
  "image/jpeg":"jpg",
  "image/gif":"gif",
  "image/png": "png",
  "image/bmp":"bmp"
}


const storage =multer.diskStorage({
  destination : (req,file,cb)=>
  {
     cb(null,"./public/data/uploads/")
  },
  filename : (req,file,cb)=>{
    const name=file.originalname.split(" ").join("_")
    const extention= MIME_TYPES[file.mimetype]

    

     cb(null, name+ "_"+Date.now()+ "."+extention);
  }
})


 const upload= multer({storage:storage,
  
   


  }
  ).any('file')



module.exports= (server) => {
  
  var c=0
  server.post('/api/upload',upload,cors(),async (req,res)=>{
    //const extention= MIME_TYPES[file.mimetype]

     tab= await annonce.findAll();

     var c=tab.length

     if(c==0){
      annonce.id_annonce=1
     }else{ c=c-1;}
    

     annonces=tab[c]

    console.log(annonces)
    
     
      image.id_annonce=parseInt(annonces.id_annonces)
      var paths = req.files.map(file => file.path);
      var noms = req.files.map(file => file.filename);

      
var newpaths =  await paths.map(function(path) {
  return path.replace(/\\/g, "/");
})

var files= req.files.map(file=>({path:file.path.replace(/\\/g, "/"),id_annonce:annonces.id_annonces,nom:file.filename}));
      console.log(paths)
      console.log(noms)
      console.log(files)
     await imagesuploads.bulkCreate(files)
      
    
        
        res.status(200).send({message:" image(s) a(ont) ete upload"})
    })

    

     
  }
  
  

  