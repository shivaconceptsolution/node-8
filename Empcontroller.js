Emp = require('./EmpModel');
exports.empview = function (req, res) {
    Emp.get(function (err, e) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Emp retrieved successfully",
            data: e
        });
    });
};

exports.empnew = function (req, res) {
    var e = new Emp();
    e.empname = req.body.empname;
    e.email = req.body.email;
    
// save the contact and check for errors
    e.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New Emp created!',
            data: e
        });
    });
};
