var express = require('express');
//pakages
let path = require('path')
var router = express.Router();
var multer = require("multer")
var fs = require('fs');


const HomepageBannerImage = require('../models/homePageBannerImage');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname);

        // this is the file name it is always unique save this value to db => file.fieldname + '-' + Date.now() + '.' + file.originalname
    }
});
// var upload = multer()
// multiple ways of uploading img
var uploadImg = multer({ storage: storage }).single('img');
var upload = multer({ storage: storage });


router.post('/', upload.single('file'), async (req, res) => {
    try {
        if (res.req.file) {

            req.body.image = res.req.file.filename;
            const banner = await new HomepageBannerImage(req.body).save();
            res.json({ message: "Banner Created successfully", success: true })
        }
        else {
            throw new Error('Banner not uploaded')
        }

    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({ message: err.message, success: false })
        else
            res.json({ message: 'Error', success: false })
    }
});

router.patch('/setBannerActive/:id', async (req, res) => {
    try {
        const banner = await HomepageBannerImage.findByIdAndUpdate(req.params.id, { active: true }).exec();
        if (banner)
            res.json({ message: "Banner is now active", success: true })
        else
            throw new Error('Something went wrong');
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({ message: err.message, success: false })
        else
            res.json({ message: 'Error', success: false })
    }
});
router.patch('/setBannerInactive/:id', async (req, res) => {
    try {
        const banner = await HomepageBannerImage.findByIdAndUpdate(req.params.id, { active: false }).exec();
        if (banner)
            res.json({ message: "Banner is now Inactive", success: true })
        else
            throw new Error('Something went wrong');
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({ message: err.message, success: false })
        else
            res.json({ message: 'Error', success: false })
    }
});
router.get('/', async (req, res) => {
    try {
        const bannerArr = await HomepageBannerImage.find().exec();
        res.json({ message: "Banner", data: bannerArr, success: true })
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({ message: err.message, success: false })
        else
            res.json({ message: 'Error', success: false })
    }
})
router.get('/getActiveBanner', async (req, res) => {
    try {
        const bannerArr = await HomepageBannerImage.find({ active: true }).exec();
        res.json({ message: "Banner", data: bannerArr, success: true })
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({ message: err.message, success: false })
        else
            res.json({ message: 'Error', success: false })
    }
})


router.delete('/removeBanner/:id/:filename', async (req, res) => {
    try {
        const bannerRemove =await HomepageBannerImage.findByIdAndRemove(req.params.id).exec() 
        if(bannerRemove){
            let dir = path.join(__dirname, '..', 'public', 'uploads', req.params.filename);
            console.log(dir)
            fs.unlinkSync(dir, (err, somedata) => {
                if (err)
                    throw err
                
            })
            res.json({ message: 'Deleted', success: true });
        }
        else
            throw new Error('Something went wrong')
    }
    catch (err) {
        console.log(err);
        if (err.message)
            res.json({ message: err.message, success: false })
        else
            res.json({ message: 'Error', success: false })
    }
})


module.exports = router