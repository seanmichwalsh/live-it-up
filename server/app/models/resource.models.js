const mongoose = require('mongoose');

var resourceSchema = mongoose.Schema({
    header: {type: String, required: true},
    body: {type: String, required: true},
})

resourceSchema.statics = {
    // SINGLETON
    returnInstance: function(callback) {
        this.findOne()
            .sort({updated: -1})
            .limit(1)
            .exec(function (error, model) {
                if (error) {
                    callback(error, null);
                } else if (model == null) {
                    callback(error, new Resource({
                        header: "",
                        body: "", 
                    }));
                } else {
                    callback(error, model);
                }
            });
    }
}
var Resource = mongoose.model('Resource', resourceSchema);
module.exports = Resource;