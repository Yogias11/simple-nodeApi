const express = require('express');
const router =  express.Router();

const Resume = require('../../app/models/Resume')

// create
router.post('/', async (req, res) => {
    const newResume = new Resume(req.body);
    try {
        const resume = await newResume.save();
        if (!resume) throw Error('Something wrong with the post')
        res.status(200).json({error: false, msg: 'Created Succesfully'});
        console.log(resume);
    } catch(error) {
        res.status(400).json({msg: error.message})
    }
});

// all
router.get('/', async(req, res) => {
    try {
        const resume = await Resume.find();
        if(!resume) throw Error('No Data');
        res.status(200).json({ error : false, msg: 'Data Found', result: resume});
    } catch (error) {
        res.status(400).json({ error : true, msg: error.message})
    }
});

// find id
router.get('/:id', async(req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if(!resume) throw Error('No Data');
        res.status(200).json(resume);
    } catch (error) {
        res.status(400).json({ msg: error.message})
    }
});

// update
router.patch('/:id', async(req, res) => {
    try {
        const resume = await Resume.findByIdAndUpdate(req.params.id, req.body);
        if(!resume) throw Error('No Data');
        res.status(200).json({error: false, msg: 'Updated Succesfully'});
    } catch (error) {
        res.status(400).json({ msg: error.message})
    }
});

// delete
router.delete('/:id', async(req, res) => {
    try {
        const resume = await Resume.findByIdAndDelete(req.params.id);
        if(!resume) throw Error('No Data');
        res.status(200).json({success: true});
    } catch (error) {
        res.status(400).json({ msg: error.message})
    }
});

router.delete('/', async(req, res) => {
    try {
        const resume = await Resume.deleteMany();
        if(!resume) throw Error('No Data');
        res.status(200).json({error: false, msg: 'Deleted All Data Succesfully'});
    } catch (error) {
        res.status(400).json({ msg: error.message})
    }
});

module.exports = router;