const staff = require('../model/staff.js')

exports.create = (req, res) => {
    if(!req.body.content) {
        return res.status(400).send({
            message: "staff content can not be empty"
        });
    }
    const staff = new staff({
        Name: req.body.title , 
        Email: req.body.content,
        Phone: req.body.content
    });
    staff.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message 
        });
    });
};
module.exports = staff
