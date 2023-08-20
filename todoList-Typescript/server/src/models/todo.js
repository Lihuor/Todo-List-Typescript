"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var todoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    status: {
        type: Boolean,
        require: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Todo", todoSchema);
