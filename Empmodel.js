var mongoose = require('mongoose');
// Setup schema
var empSchema = mongoose.Schema({
    empname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});
// Export Contact model
var Emp = module.exports = mongoose.model('emp', empSchema);
module.exports.get = function (callback, limit) {
    Emp.find(callback).limit(limit);
}