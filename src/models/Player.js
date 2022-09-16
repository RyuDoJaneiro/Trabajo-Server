const { model, Schema} = require("mongoose");

const PlayerSchema = new Schema({
        playername: {
                type: String,
                required: true
        },
        password: {
                type: String,
                required: true
        },
        email: {
                type: String,
                unique: true
        },
        levelscompleted: {
                type: Number,
                default: 0
        },
        active: {
                type: Boolean,
                required: true,
                default: true,
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = model('Players', PlayerSchema);