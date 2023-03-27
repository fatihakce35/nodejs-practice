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
        res.status(200).render("photos", {photos})

    }
    catch(error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }
    
}

export {createPhoto, getAllPhoto}