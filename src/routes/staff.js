// const express = require("express");

const express = require("express");
const Staff = require("../model/staff");
const router = express.Router();

//getting all
router.get("/", async (req, res) => {
  try {
    const Staff = await Staff.find();
    res.json(Staff);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Getting One
router.get("/:id", getStaff, (req, res) => {
  res.json(res.Staff);
});

// Creating one
router.post('/', async (req, res) => {
    const Staff = new Staff({
      name: req.body.name,
      email: req.body.email,
      phone:req.body.phone
    })
    try {
      const newStaff = await Staff.save()
      res.status(201).json(newStaff)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

  //update one
  router.patch('/:id', getStaff, async (req, res) => {
    if (req.body.name != null) {
      res.Staff.name = req.body.name
    }
    if (req.body.email != null) {
      res.staff.email = req.body.email
    }
    try {
      const updatedStaff = await res.staff.save()
      res.json(updatedStaff)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })
  //delete one
  router.delete('/:id', getStaff, async (req, res) => {
    try {
      await res.Staff.remove()
      res.json({ message: 'Deleted Staff' })
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  })


  async function getStaff(req, res, next) {
    let Staff
    try {
      Staff = await Staff.findById(req.params.id)
      if (Staff == null) {
        return res.status(404).json({ message: 'Cannot find staff' })
      }
    } catch (err) {
      return res.status(500).json({ message: err.message })
    }
  
    res.Staff = Staff
    next()
  }

module.exports = router;
