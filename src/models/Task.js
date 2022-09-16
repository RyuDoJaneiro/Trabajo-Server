const { model, Schema} = require("mongoose");

const TaskSchema = new Schema({
        taskname: {
                type: String,
                required: true
        },
        taskdescription: {
                type: String
        },
        isdone: {
                type: Boolean,
                default: false
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = model('Tasks', TaskSchema);