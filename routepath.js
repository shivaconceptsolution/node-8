// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'test api'
    });
});
var empController = require('./Empcontroller');
router.route('/emps').get(empController.empview).post(empController.empnew);

module.exports = router;