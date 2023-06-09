import Photo from "../models/photoModel.js";


// post request
const createPhoto = async (req, res) => {

    try {
       
        const photos = await Photo.create(req.body)
        res.status(201).json({
            succeded: true,
            photos
        }) 

    }
    catch(error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
    
}


// get request
const getAllPhoto = async (req, res) => {

    try {
        
        const photos = await Photo.find({})
        res.status(200).render("photos", {photos, link: "photos"})

    }
    catch(error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
    
}

//for single photo

const getAPhoto = async (req, res) => {

    try {  
        
        const photo = await Photo.findById({_id : req.params.id})
        res.status(200).render("photo", {photo, link: "photos"})

    }
    catch(error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
     
}

export {createPhoto, getAllPhoto, getAPhoto}